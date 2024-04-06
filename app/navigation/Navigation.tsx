import React, { FC } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { useAuth } from '../hooks/useAuth'
import Login from '../screens/auth/Login'
import Register from '../screens/auth/Register'
import Home from '../screens/home/Home'
import Verification from '../screens/auth/Verification'

const Stack = createNativeStackNavigator()

const Navigation: FC = () => {
  const { isLoggedIn } = useAuth()

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLoggedIn ? (
          <>
            <Stack.Screen name="Home" component={Home} />
          </>
        ) : (
          <>
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen
              name="Register"
              component={Register}
              options={{ headerTitle: '', headerTransparent: true, headerTintColor: '#3b82f6' }}
            />
            <Stack.Screen
              name="Verification"
              component={Verification}
              options={{ headerTitle: '', headerTransparent: true, headerTintColor: '#3b82f6' }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation
