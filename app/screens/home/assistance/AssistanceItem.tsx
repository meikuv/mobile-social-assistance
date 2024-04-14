import React, { FC } from 'react'
import { ImageBackground, Pressable, Text, View } from 'react-native'
import { IAssistance } from '../../../services/assistance.service'

const AssistanceItem: FC<{ assistance: IAssistance }> = ({ assistance }) => {
  return (
    <Pressable>
      <View className="w-24 h-40 rounded-xl mr-4">
        <ImageBackground
          source={require('../../../../assets/splash-2.png')}
          resizeMode="cover"
          style={{ width: 96, height: 96 }}
          imageStyle={{ borderRadius: 12 }}
        />
        <Text className="w-24 text-center text-black text-xs mt-1 p-1">{assistance.name}</Text>
      </View>
    </Pressable>
  )
}

export default AssistanceItem
