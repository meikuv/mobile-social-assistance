import React, { FC, useState } from 'react'
import { View, Text } from 'react-native'
import CodeInputField from '../../components/CodeInputField'
import Button from '../../components/ui/Button'
import { useAuth } from '../../hooks/useAuth'
import { useNavigation, useRoute } from '@react-navigation/native'

const Verification: FC = () => {
  const route = useRoute()
  const navigation = useNavigation()
  
  const { email } = route.params
  const [pinReady, setPinReady] = useState<boolean>(false)
  const [code, setCode] = useState<string>('')
  const MAX_INPUT_LENGTH = 4

  const { verification } = useAuth()

  const verificationHandler = () => {
    verification(email, code).then(() => {
      navigation.navigate('Login')
    })
  }

  const handleChange = (inputValue: any) => {
    if (inputValue.length > MAX_INPUT_LENGTH) {
      inputValue = inputValue.substring(0, MAX_INPUT_LENGTH)
    }
    setCode(inputValue)
  }

  return (
    <View className="h-full w-full bg-white pt-16">
      <View className="mx-5 justify-center items-center h-full">
        <View className="w-10/12">
          <Text className="text-center text-blue-900 text-2xl font-bold">Email верификация</Text>
          <Text className="text-gray-400 text-center text-xs">
            Проверочный код был отправлен по адресу
            <Text className="text-gray-800"> {email}</Text>
          </Text>
          <CodeInputField
            setPinReady={setPinReady}
            code={code}
            setCode={handleChange}
            maxLength={MAX_INPUT_LENGTH}
          />
          <Button
            onPress={verificationHandler}
            title="Проверить"
            isLoading={false}
            isDisabled={!pinReady}
          />
        </View>
      </View>
    </View>
  )
}

export default Verification
