import { useQuery } from '@tanstack/react-query'
import UserService from '../../services/user.service'

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
