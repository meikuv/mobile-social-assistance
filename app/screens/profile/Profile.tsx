import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import Loader from '../../components/ui/Loader'
import { useGetProfile } from './useProfile'
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'

const Profile = () => {
  const { data: user, isLoading } = useGetProfile()

  return (
    <View className="h-full w-full bg-slate-100">
      {isLoading ? (
        <View className="flex-1 items-center justify-center">
          <Loader size="large" color="#3b82f6" />
        </View>
      ) : (
        <>
          <Header user={user} />
          <ScrollView
            contentContainerStyle={{
              padding: 12,
              alignItems: 'center',
            }}
          >
            <Content />
            <Footer />
          </ScrollView>
        </>
      )}
    </View>
  )
}

export default Profile
