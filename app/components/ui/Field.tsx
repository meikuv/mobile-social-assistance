import React, { FC } from 'react'
import { TextInput, View, Text } from 'react-native'

interface IField {
  onChange: (value: string) => void
  value: string
  placeholder: string
  isSecure: boolean
  error?: string
}

const Field: FC<IField> = ({ onChange, value, placeholder, isSecure, error }) => {
  return (
    <View>
      <TextInput
        onChangeText={onChange}
        placeholder={placeholder}
        value={value}
        secureTextEntry={isSecure}
        autoCapitalize="none"
        cursorColor="#000"
        autoComplete="off"
        className="rounded-xl bg-sky-50 mt-2 py-3 px-4 w-full text-sm"
      />
      {error && <Text className="text-red-500 mt-1 mx-2 text-xs">{error}</Text>}
    </View>
  )
}

export default Field
