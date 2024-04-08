import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Text, Pressable, StyleProp, ViewStyle, View } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo'

interface IconProps {
  name: string
  size: number
  color: string
}

interface LinkProps {
  iconComponent: React.ComponentType<IconProps>
  iconProps: IconProps
  style?: StyleProp<ViewStyle>
  title?: string
  onPress: () => void
}

const TextLink: React.FC<LinkProps> = ({
  iconComponent: IconComponent,
  iconProps,
  title,
  onPress,
}) => {
  return (
    <Pressable className="w-full flex-row items-center justify-between mb-5" onPress={onPress}>
      <View className="flex-row items-center">
        <IconComponent {...iconProps} />
        <Text className="text-md text-sky-600 ml-4">{title}</Text>
      </View>
      <Icon name="chevron-right" size={15} color={'rgb(2 132 199)'} />
    </Pressable>
  )
}

export default TextLink
