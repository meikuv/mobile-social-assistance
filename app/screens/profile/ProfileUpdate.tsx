import React, { FC, useState } from 'react'
import { View } from 'react-native'
import { IUser } from '../../services/user.service'
import { useGetProfile, useUpdateProfile } from './useProfile'
import Layout from '../../components/layout/Layout'
import Field from '../../components/ui/Field'
import Button from '../../components/ui/Button'
import Loader from '../../components/ui/Loader'

const ProfileUpdate: FC = () => {
  const { isPending, mutate } = useUpdateProfile()
  const { data: user, isLoading } = useGetProfile()
  const [data, setData] = useState<IUser | undefined>(user)

  const updateHandler = () => {
    mutate(data)
  }

  const fields = [
    { key: 'username', label: 'Логин', isDisabled: true },
    { key: 'email', label: 'Почта', isDisabled: true },
    { key: 'firstName', label: 'Имя' },
    { key: 'lastName', label: 'Фамилия' },
    { key: 'phoneNumber', label: 'Номер телефона' },
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
                label={field.label}
              />
            ))}
            <Button onPress={updateHandler} isLoading={isPending} title="Обновить" />
          </View>
        )}
      </View>
    </Layout>
  )
}

export default ProfileUpdate
