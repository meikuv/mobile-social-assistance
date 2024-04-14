import React, { FC, useState } from 'react'
import { Pressable, RefreshControl, ScrollView, Text, View } from 'react-native'
import { useGetAllAssistance } from './useAssistance'
import { IAssistance } from '../../../services/assistance.service'
import Loader from '../../../components/ui/Loader'
import AssistanceItem from './AssistanceItem'
import Icon from 'react-native-vector-icons/Feather'

const Assistance: FC = () => {
  const { isLoading, data, refetch } = useGetAllAssistance()
  const [refreshing, setRefreshing] = useState<boolean>(false)

  const assistanceByType: { [key: string]: IAssistance[] } = {}
  data?.forEach((assistance) => {
    if (!assistanceByType[assistance.type]) {
      assistanceByType[assistance.type] = []
    }
    assistanceByType[assistance.type].push(assistance)
  })

  const onRefresh = React.useCallback(() => {
    setRefreshing(true)
    setTimeout(() => {
      setRefreshing(false)
      refetch()
    }, 1500)
  }, [])

  return (
    <View className="w-full p-2">
      {isLoading ? (
        <Loader size="large" color="#3b82f6" />
      ) : (
        Object.keys(assistanceByType).map((type) => (
          <View key={type} className="flex-col items-start bg-white mb-4 p-4 rounded-2xl">
            <Text className="text-black font-semibold text-xl mb-2">{type}</Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
            >
              {assistanceByType[type].slice(0, 5).map((assistance) => (
                <AssistanceItem key={assistance.id} assistance={assistance} />
              ))}
              {assistanceByType[type].length > 4 && (
                <Pressable
                  onPress={() => console.log('Pressed additional icon')}
                  className="h-20 items-center justify-center mx-1"
                >
                  <Icon name="more-horizontal" size={25} color="#000" />
                </Pressable>
              )}
            </ScrollView>
          </View>
        ))
      )}
    </View>
  )
}

export default Assistance
