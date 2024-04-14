import React, { FC } from 'react'
import { View, Text } from 'react-native'
import { useGetAllAssistance } from './useAssistance'
import Loader from '../../../components/ui/Loader'

const Assistance: FC = () => {
  const { isLoading, data } = useGetAllAssistance()

  return (
    <View className="w-11/12">
      <Loader size="large" color="#3b82f6" />
    </View>
  )
}

export default Assistance
