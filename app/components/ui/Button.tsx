import React, { FC } from 'react'
import { TouchableHighlight, Text, View } from 'react-native'
import Loader from './Loader'

interface IButton {
  onPress: () => void
  title: string
  colors?: [string, string]
  isLoading: boolean
  isDisabled?: boolean
}

const Button: FC<IButton> = ({
  onPress,
  title,
  colors = ['bg-sky-600', 'bg-gray-600'],
  isLoading,
  isDisabled,
}) => {
  return (
    <TouchableHighlight
      onPress={isLoading ? undefined : onPress}
      className={`${colors[0]} text-white rounded-xl w-full my-4 py-3`}
      disabled={isLoading || isDisabled}
    >
      <View className="items-center">
        {isLoading ? (
          <Loader size="small" color="#ffffff" />
        ) : (
          <Text className="text-white">{title}</Text>
        )}
      </View>
    </TouchableHighlight>
  )
}

export default Button
