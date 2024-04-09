import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query' // Assuming you're using tanstack/react-query
import UserService, { IUser } from '../../services/user.service'
import { showToast } from '../../hooks/useToast'
import { IChangePassword } from './changePassword/ChangePassword'

export const useGetProfile = () => {
  return useQuery({
    queryKey: ['getMe'],
    queryFn: async () => {
      const { data } = await UserService.getMe()
      console.log(data)
      return data
    },
  })
}

export const useUpdateProfile = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (user: IUser | undefined) => {
      try {
        const { data } = await UserService.updateProfile(user)
        console.log(data)
        showToast('success', 'Обновить данные', data.message)
        return data
      } catch (error: any) {
        if (error.response) {
          const errorMessage = error.response.data.message
          showToast('error', 'Обновить данные', errorMessage)
        } else {
          console.log(error)
        }
        throw new Error('Update profile error')
      }
    },
    onSuccess: () => {
      queryClient.refetchQueries('getMe')
    },
  })
}

export const useChangePassword = () => {
  return useMutation({
    mutationFn: async (password: IChangePassword | undefined) => {
      try {
        const { data } = await UserService.changePassword(password)
        console.log(data)
        showToast('success', 'Изменить пароль', data.message)
        return data
      } catch (error: any) {
        if (error.response) {
          const errorMessage = error.response.data.message
          showToast('error', 'Изменить пароль', errorMessage)
        } else {
          console.log(error)
        }
        throw new Error('Change password error')
      }
    },
  })
}
