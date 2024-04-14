import React, { FC } from 'react'
import { View } from 'react-native'
import Assistance from './assistance/AssistanceList'

const Home: FC = () => {
  return (
    <View className="w-full h-full items-center pt-10">
      <Assistance />
    </View>
  )
}

export default Home
