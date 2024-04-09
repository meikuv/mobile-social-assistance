import React, { FC, useState } from 'react'
import { View, Text } from 'react-native'
import Field from '../../../components/ui/Field'
import Button from '../../../components/ui/Button'
import { useChangePassword } from '../useProfile'
import { useTranslation } from 'react-i18next'

export interface IChangePassword {
  oldPassword?: string
  newPassword?: string
  confirmPassword?: string
}

const ChangePassword: FC = () => {
  const { t } = useTranslation()
  const { isPending, mutate } = useChangePassword()
  const [data, setData] = useState<IChangePassword | undefined>({} as IChangePassword)
  const fields = [{ key: 'oldPassword' }, { key: 'newPassword' }, { key: 'confirmPassword' }]

  const passwordHandler = () => {
    mutate(data)
  }

  return (
    <View className="w-full h-full items-center bg-white pt-10">
      <View className="w-10/12">
        {fields.map((field) => (
          <Field
            key={field.key}
            value={data?.[field.key]}
            onChange={(val) => setData({ ...data, [field.key]: val })}
            label={t(`changePassword.${field.key}`)}
            isSecure={true}
          />
        ))}
        <Button
          title={t('changePassword.updateButton')}
          isLoading={isPending}
          onPress={passwordHandler}
        />
      </View>
    </View>
  )
}

export default ChangePassword
