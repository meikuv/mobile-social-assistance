import React, { FC } from 'react'
import { View } from 'react-native'
import TextLink from '../../../components/ui/TextLink'
import Icon from 'react-native-vector-icons/Entypo'
import { useNavigation } from '@react-navigation/native'

const Content: FC = () => {
  const navigation = useNavigation()

  return (
    <View className="w-full h-max items-start justify-center bg-white rounded-xl px-5 pt-4">
      <TextLink
        onPress={() => {}}
        iconComponent={Icon}
        iconProps={{ name: 'back-in-time', size: 25, color: 'rgb(2, 132, 199)' }}
        title="История"
      />
      <TextLink
        onPress={() => {}}
        iconComponent={Icon}
        iconProps={{ name: 'clipboard', size: 25, color: 'rgb(2, 132, 199)' }}
        title="Мои запросы"
      />
      <TextLink
        onPress={() => {}}
        iconComponent={Icon}
        iconProps={{ name: 'direction', size: 25, color: 'rgb(2, 132, 199)' }}
        title="Оставить отзыв"
      />
    </View>
  )
}

export default Content
