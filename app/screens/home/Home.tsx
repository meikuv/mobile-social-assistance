import React, { FC } from 'react'
import { View, Text } from 'react-native'
import Assistance from './assistance/Assistance'
// import Map from './map/Map'

const Home: FC = () => {
  return (
    <View className="w-full h-full items-center justify-center bg-white">
      <Assistance />
    </View>
  )
}

export default Home
