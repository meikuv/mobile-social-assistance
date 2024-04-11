import React, { createContext, useMemo, useState, useRef, useEffect, FC, ReactNode } from 'react'
import { AppState, ToastAndroid } from 'react-native'
import AuthService from '../services/auth.service'
import TokenService from '../services/token.service'
import { showToast } from '../hooks/useToast'

interface IContext {
  isLoading: boolean
  isActive: boolean
  isLoggedIn: boolean
  login: (username: string, password: string) => Promise<void>
  register: (username: string, email: string, password: string) => Promise<void>
  verification: (email: string, code: string) => Promise<void>
  logout: () => Promise<void>
}

interface AuthProviderProps {
  children: ReactNode
}

export const AuthContext = createContext<IContext>({} as IContext)

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const appState = useRef(AppState.currentState)
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
  const [appStateVisible, setAppStateVisible] = useState(appState.current)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const login = async (username: string, password: string) => {
    setIsLoading(true)

    try {
      const { data } = await AuthService.login(username, password)
      await TokenService.setCredentials(data)
      setIsLoggedIn(true)
      showToast('success', 'Вход', data.message)
      return data
    } catch (error: any) {
      if (error.response) {
        const errorMessage = error.response.data.message
        ToastAndroid.show(errorMessage, ToastAndroid.LONG)
        showToast('error', 'Вход', errorMessage)
      } else {
        console.log(error)
      }
      ToastAndroid.show(error, ToastAndroid.LONG)
      throw new Error('Login error')
    } finally {
      setIsLoading(false)
    }
  }

  const register = async (username: string, email: string, password: string) => {
    try {
      setIsLoading(true)

      const { data } = await AuthService.register(username, email, password)

      showToast('success', 'Регистрация', data.message)
      return data
    } catch (error: any) {
      if (error.response) {
        const errorMessage = error.response.data.message
        showToast('error', 'Регистрация', errorMessage)
      } else {
        console.log(error)
      }
      throw new Error('Registration error')
    } finally {
      setIsLoading(false)
    }
  }

  const verification = async (email: string, code: string) => {
    try {
      setIsLoading(true)

      const { data } = await AuthService.verification(email, code)

      showToast('success', 'Верификация', data.message)
      return data
    } catch (error: any) {
      if (error.response) {
        const errorMessage = error.response.data.message
        showToast('error', 'Верификация', errorMessage)
      } else {
        console.log(error)
      }
      throw new Error('Verification error')
    } finally {
      setIsLoading(false)
    }
  }

  const logout = async () => {
    try {
      setIsLoading(true)
      const { data } = await AuthService.logout()
      await TokenService.clearCredentials()
      setIsLoggedIn(false)

      showToast('success', 'Выход', data.message)
      return data
    } catch (error: any) {
      if (error.response) {
        const errorMessage = error.response.data.message
        showToast('error', 'Выход', errorMessage)
      } else {
        console.log(error)
      }
      throw new Error('Logout error')
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    const subscription = AppState.addEventListener('change', (nextAppState) => {
      appState.current = nextAppState
      setAppStateVisible(appState.current)

      if (nextAppState === 'unknown') {
        logout()
      }
    })

    return () => {
      subscription.remove()
    }
  }, [])

  const value = useMemo(
    () => ({
      isLoading: isLoading,
      isActive: isLoggedIn && appStateVisible === 'active',
      isLoggedIn: isLoggedIn,
      login: login,
      register: register,
      logout: logout,
      verification: verification,
    }),
    [isLoading]
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
