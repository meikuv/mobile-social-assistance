import React, { FC } from 'react'
import { useNavigation } from '@react-navigation/native'
import { View, Text, Pressable } from 'react-native'
import { useAuth } from '../../../hooks/useAuth'
import Icon from 'react-native-vector-icons/Feather'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { useTranslation } from 'react-i18next'

const Footer: FC = () => {
  const navigation = useNavigation()
  const { t } = useTranslation()
  const { logout } = useAuth()

  return (
    <View className="w-full h-max items-start bg-white rounded-xl mt-3 p-5">
      <Pressable
        onPress={() => navigation.navigate('Settings')}
        className="flex-row items-center mb-5"
      >
        <Icon name="settings" size={25} style={{ marginRight: 15 }} color={'rgb(2 132 199)'} />
        <Text className="text-md text-sky-600">{t('settings.title')}</Text>
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate('ChangePassword')}
        className="flex-row items-center mb-5"
      >
        <MaterialIcons
          name="password"
          size={25}
          style={{ marginRight: 15 }}
          color={'rgb(2 132 199)'}
        />
        <Text className="text-md text-sky-600">{t('changePassword.title')}</Text>
      </Pressable>
      <Pressable className="flex-row items-center mb-5">
        <Icon name="smartphone" size={25} style={{ marginRight: 15 }} color={'rgb(2 132 199)'} />
        <Text className="text-md text-sky-600">{t('contact.title')}</Text>
      </Pressable>
      <Pressable onPress={logout} className="flex-row items-center">
        <Icon name="power" size={25} style={{ marginRight: 15 }} color={'rgb(248 113 113)'} />
        <Text className="text-md text-red-400">{t('quit')}</Text>
      </Pressable>
    </View>
  )
}

export default Footer
