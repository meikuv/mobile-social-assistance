import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useTranslation } from 'react-i18next'
import ProfileUpdate from '../../screens/profile/ProfileUpdate'
import Profile from '../../screens/profile/Profile'
import ProfileSettings from '../../screens/profile/settings/ProfileSettings'
import ChangePassword from '../../screens/profile/changePassword/ChangePassword'

const Stack = createNativeStackNavigator()

const ProfileStack = () => {
  const { t } = useTranslation()

  return (
    <Stack.Navigator initialRouteName="Profile">
      <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
      <Stack.Screen
        name="ProfileUpdate"
        component={ProfileUpdate}
        options={{
          headerTitle: `${t('profileUpdate.title')}`,
          headerTransparent: false,
          headerTintColor: 'rgb(2, 132, 199)',
        }}
      />
      <Stack.Screen
        name="Settings"
        component={ProfileSettings}
        options={{
          headerTitle: `${t('settings.title')}`,
          headerTransparent: true,
          headerTintColor: 'rgb(2, 132, 199)',
        }}
      />
      <Stack.Screen
        name="ChangePassword"
        component={ChangePassword}
        options={{
          headerTitle: `${t('changePassword.title')}`,
          headerTransparent: false,
          headerTintColor: 'rgb(2, 132, 199)',
        }}
      />
    </Stack.Navigator>
  )
}

export default ProfileStack
