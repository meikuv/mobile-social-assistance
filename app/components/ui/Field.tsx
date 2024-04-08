import React, { FC } from 'react'
import { TextInput, View, Text } from 'react-native'

interface IField {
  onChange: (value: string) => void
  value: string | undefined
  placeholder?: string
  isSecure: boolean
  error?: string
  label?: string
  isDisabled?: boolean
}

const Field: FC<IField> = ({
  onChange,
  value,
  placeholder,
  isSecure,
  error,
  label,
  isDisabled,
}) => {
  return (
    <View>
      {label && <Text className="text-sky-600 text-md ml-2 mt-2">{label}:</Text>}
      <TextInput
        onChangeText={onChange}
        placeholder={placeholder}
        value={value}
        secureTextEntry={isSecure}
        editable={!isDisabled}
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
