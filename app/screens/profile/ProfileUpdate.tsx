import React, { FC, useState } from 'react'
import { View } from 'react-native'
import { IUser } from '../../services/user.service'
import { useGetProfile, useUpdateProfile } from './useProfile'
import Layout from '../../components/layout/Layout'
import Field from '../../components/ui/Field'
import Button from '../../components/ui/Button'
import Loader from '../../components/ui/Loader'
import { useTranslation } from 'react-i18next'

const ProfileUpdate: FC = () => {
  const { t } = useTranslation()
  const { isPending, mutate } = useUpdateProfile()
  const { data: user, isLoading } = useGetProfile()
  const [data, setData] = useState<IUser | undefined>(user)

  const updateHandler = () => {
    mutate(data)
  }

  const fields = [
    { key: 'username', isDisabled: true },
    { key: 'email', isDisabled: true },
    { key: 'firstName' },
    { key: 'lastName' },
    { key: 'phoneNumber' },
  ]

  return (
    <Layout isScrollView={true}>
      <View className="items-center pt-24">
        {isLoading ? (
          <Loader size={'large'} color="#3b82f6" />
        ) : (
          <View className="w-10/12">
            {fields.map((field) => (
              <Field
                key={field.key}
                onChange={(val) => setData({ ...data, [field.key]: val })}
                value={data?.[field.key]}
                isSecure={false}
                isDisabled={field.isDisabled}
                label={t(`profileUpdate.${field.key}`)}
              />
            ))}
            <Button
              onPress={updateHandler}
              isLoading={isPending}
              title={t('profileUpdate.updateButton')}
            />
          </View>
        )}
      </View>
    </Layout>
  )
}

export default ProfileUpdate
