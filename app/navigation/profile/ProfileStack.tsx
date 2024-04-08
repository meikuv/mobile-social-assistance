import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ProfileUpdate from '../../screens/profile/ProfileUpdate'
import Profile from '../../screens/profile/Profile'
import ProfileSettings from '../../screens/profile/ProfileSettings'

const Stack = createNativeStackNavigator()

const ProfileStack = () => {
  return (
    <Stack.Navigator initialRouteName="Profile">
      <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
      <Stack.Screen
        name="ProfileUpdate"
        component={ProfileUpdate}
        options={{
          headerTitle: 'Обновить данные',
          headerTransparent: false,
          headerTintColor: '#3b82f6',
        }}
      />
      <Stack.Screen
        name="Settings"
        component={ProfileSettings}
        options={{
          headerTitle: 'Настройки',
          headerTransparent: false,
          headerTintColor: '#3b82f6',
        }}
      />
    </Stack.Navigator>
  )
}

export default ProfileStack
