import React, { FC } from 'react'
import { View } from 'react-native'
import Button from '../../components/ui/Button'
import { useAuth } from '../../hooks/useAuth'

const Home: FC = () => {
  const { logout } = useAuth()

  return (
    <View>
      <Button onPress={logout} title="Выйти" isLoading={false} />
    </View>
  )
}

export default Home
