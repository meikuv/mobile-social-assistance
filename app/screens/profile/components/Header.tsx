import { useNavigation } from '@react-navigation/native'
import React, { FC } from 'react'
import { View, Text, Pressable } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { IUser } from '../../../services/user.service'

interface IHeaderProps {
  user: IUser | undefined
}

const Header: FC<IHeaderProps> = ({ user }) => {
  const navigation = useNavigation()

  return (
    <View className="w-full h-32 bg-sky-700 rounded-b-2xl justify-center items-center">
      <Pressable
        className="w-10/12 pt-5 flex flex-row justify-between items-center"
        onPress={() => navigation.navigate('ProfileUpdate')}
      >
        <FontAwesome5 name="user-circle" size={55} color={'white'} />
        <View>
          <Text className="text-lg font-medium text-white">
            {user?.lastName && user?.firstName
              ? `${user?.lastName} ${user?.firstName}`
              : user?.username}
          </Text>
          <Text className="text-xs text-white">{user?.email}</Text>
        </View>
        <FontAwesome5 name="chevron-right" size={15} color={'white'} />
      </Pressable>
    </View>
  )
}

export default Header
