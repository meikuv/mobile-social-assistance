import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { View, Text, Pressable } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import { useAuth } from '../../../hooks/useAuth'

const Footer = () => {
  const navigation = useNavigation()
  const { logout } = useAuth()

  return (
    <View className="w-full h-max items-start bg-white rounded-xl mt-3 p-5">
      <Pressable className="flex-row items-center mb-5">
        <Icon name="settings" size={25} style={{ marginRight: 15 }} color={'rgb(2 132 199)'} />
        <Text className="text-lg text-sky-600">Настройки</Text>
      </Pressable>
      <Pressable className="flex-row items-center mb-5">
        <Icon name="smartphone" size={25} style={{ marginRight: 15 }} color={'rgb(2 132 199)'} />
        <Text className="text-lg text-sky-600">Связаться с нами</Text>
      </Pressable>
      <Pressable className="flex-row items-center" onPress={logout}>
        <Icon name="power" size={25} style={{ marginRight: 15 }} color={'rgb(248 113 113)'} />
        <Text className="text-lg text-red-400">Выход</Text>
      </Pressable>
    </View>
  )
}

export default Footer
