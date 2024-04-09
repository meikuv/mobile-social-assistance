import React, { FC } from 'react'
import { View } from 'react-native'
import TextLink from '../../../components/ui/TextLink'
import Icon from 'react-native-vector-icons/Entypo'
import { useNavigation } from '@react-navigation/native'
import { useTranslation } from 'react-i18next'

const Content: FC = () => {
  const navigation = useNavigation()
  const { t } = useTranslation()

  return (
    <View className="w-full h-max items-start justify-center bg-white rounded-xl px-5 pt-4">
      <TextLink
        onPress={() => {}}
        iconComponent={Icon}
        iconProps={{ name: 'back-in-time', size: 25, color: 'rgb(2, 132, 199)' }}
        title={t('history.title')}
      />
      <TextLink
        onPress={() => {}}
        iconComponent={Icon}
        iconProps={{ name: 'clipboard', size: 25, color: 'rgb(2, 132, 199)' }}
        title={t('myRequests.title')}
      />
      <TextLink
        onPress={() => {}}
        iconComponent={Icon}
        iconProps={{ name: 'direction', size: 25, color: 'rgb(2, 132, 199)' }}
        title={t('leaveReview.title')}
      />
    </View>
  )
}

export default Content
