import React, { FC } from 'react'
import { View, Text } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

interface IProfileHeader {
  username?: string
  email?: string
  firstName?: string
  lastName?: string
}

const Header: FC<IProfileHeader> = ({ username, firstName, lastName, email }) => {
  return (
    <View className="w-full h-32 bg-sky-600 rounded-b-2xl justify-center items-center">
      <View className="w-10/12 pt-5 flex flex-row justify-between items-center">
        <FontAwesome5 name="user-circle" size={55} color={'white'} />
        <View className="">
          <Text className="text-lg font-medium text-white">
            {lastName && firstName ? `${lastName} ${firstName}` : username}
          </Text>
          <Text className="text-xs text-white">{email}</Text>
        </View>
        <FontAwesome5 name="chevron-right" size={15} color={'white'} />
      </View>
    </View>
  )
}

export default Header
