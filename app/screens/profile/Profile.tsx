import React from 'react'
import { View, Text } from 'react-native'
import Loader from '../../components/ui/Loader'
import { useGetProfile } from './useProfile'
import ProfileHeader from './ProfileHeader'

const Profile = () => {
  const { data: user, isLoading } = useGetProfile()

  return (
    <View className="h-full w-full bg-white">
      {isLoading ? (
        <View className="flex-1 items-center justify-center">
          <Loader size="large" color="#3b82f6" />
        </View>
      ) : (
        <ProfileHeader username={user?.username} email={user?.email} />
      )}
    </View>
  )
}

export default Profile
