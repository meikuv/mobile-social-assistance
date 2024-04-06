import React, { FC, useState } from 'react'
import { View, Text, Pressable } from 'react-native'
import Loader from '../../components/ui/Loader'
import Field from '../../components/ui/Field'
import Button from '../../components/ui/Button'
import { useAuth } from '../../hooks/useAuth'

interface IData {
  email: string
  username: string
  password: string
}

const Register: FC = ({ navigation }) => {
  const { register, isLoading } = useAuth()
  const [data, setData] = useState<IData>({ username: '', password: '', email: '' })
  const [errors, setErrors] = useState<{ [key: string]: string }>({})

  const validateForm = () => {
    const errors: { [key: string]: string } = {}

    if (!data.username || !data.username.trim()) {
      errors.username = 'Заполните поле логин'
    }

    if (!data.password || !data.password.trim()) {
      errors.password = 'Заполните поле пароль'
    }

    if (!data.email || !data.email.trim()) {
      errors.email = 'Заполните поле email'
    }

    return errors
  }

  const registerHandler = async () => {
    const formErrors = validateForm()

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors)
      return
    }

    const { username, email, password } = data
    await register(username, email, password).then(() =>
      navigation.navigate('Verification', {
        email: data.email,
      })
    )
    setData({} as IData)
  }

  return (
    <View className="h-full w-full bg-white pt-16">
      <View className="mx-5 justify-center items-center h-full">
        <View className="w-10/12">
          {isLoading ? (
            <Loader size="large" color="#3b82f6" />
          ) : (
            <>
              <Text className="text-center text-blue-900 text-2xl font-bold mb-5">Регистрация</Text>
              <Field
                value={data.username}
                placeholder="Создайте новый логин"
                onChange={(val) => {
                  setData({ ...data, username: val })
                  setErrors({ ...errors, username: '' })
                }}
                isSecure={false}
                error={errors.username}
              />
              <Field
                value={data.email}
                placeholder="Введите email"
                onChange={(val) => {
                  setData({ ...data, email: val })
                  setErrors({ ...errors, email: '' })
                }}
                isSecure={false}
                error={errors.email}
              />
              <Field
                value={data.password}
                placeholder="Создайте пароль"
                onChange={(val) => {
                  setData({ ...data, password: val })
                  setErrors({ ...errors, password: '' })
                }}
                isSecure={true}
                error={errors.password}
              />
              <Button onPress={registerHandler} title="Создать" isLoading={isLoading} />
              <Pressable onPress={() => navigation.navigate('Login')}>
                <Text className="text-center mt-1 text-gray-400 font-semibold">
                  Войти в свой аккаунт
                </Text>
              </Pressable>
            </>
          )}
        </View>
      </View>
    </View>
  )
}

export default Register
