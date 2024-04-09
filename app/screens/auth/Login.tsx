import React, { FC, useState } from 'react'
import { View, Text, Pressable } from 'react-native'
import Loader from '../../components/ui/Loader'
import Field from '../../components/ui/Field'
import Button from '../../components/ui/Button'
import { useAuth } from '../../hooks/useAuth'
import { useNavigation } from '@react-navigation/native'
import { useTranslation } from 'react-i18next'

interface IData {
  username: string
  password: string
}

const Login: FC = () => {
  const { t } = useTranslation()
  const navigation = useNavigation()
  const { login, isLoading } = useAuth()
  const [data, setData] = useState<IData>({ username: '', password: '' })
  const [errors, setErrors] = useState<{ [key: string]: string }>({})

  const validateForm = () => {
    const errors: { [key: string]: string } = {}

    if (!data.username || !data.username.trim()) {
      errors.username = t('login.usernameError')
    }

    if (!data.password || !data.password.trim()) {
      errors.password = t('login.passwordError')
    }

    return errors
  }

  const loginHandler = async () => {
    const formErrors = validateForm()

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors)
      return
    }

    const { username, password } = data
    await login(username, password)
    setData({} as IData)
  }

  return (
    <View className="h-full w-full bg-white pt-16">
      <View className="mx-5 justify-center items-center h-full">
        <View className="w-10/12">
          {isLoading ? (
            <Loader size="large" color="#3b82f6" />
          ) : (
            <>
              <Text className="text-center text-blue-900 text-2xl font-bold mb-5">
                {t('login.title')}
              </Text>
              <Field
                value={data.username}
                placeholder={t('login.username')}
                onChange={(val) => {
                  setData({ ...data, username: val })
                  setErrors({ ...errors, username: '' })
                }}
                isSecure={false}
                error={errors.username}
              />
              <Field
                value={data.password}
                placeholder={t('login.password')}
                onChange={(val) => {
                  setData({ ...data, password: val })
                  setErrors({ ...errors, password: '' })
                }}
                isSecure={true}
                error={errors.password}
              />
              <Button onPress={loginHandler} title={t('login.loginButton')} isLoading={isLoading} />
              <Pressable onPress={() => navigation.navigate('Register')}>
                <Text className="text-center mt-1 text-gray-400 font-semibold">
                  {t('login.toRegistration')}
                </Text>
              </Pressable>
            </>
          )}
        </View>
      </View>
    </View>
  )
}

export default Login
