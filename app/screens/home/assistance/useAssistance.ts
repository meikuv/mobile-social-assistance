import { useQuery } from '@tanstack/react-query'
import AssistanceService from '../../../services/assistance.service'

export const useGetAllAssistance = () => {
  return useQuery({
    queryKey: ['getAllAssistance'],
    queryFn: async () => {
      const { data } = await AssistanceService.getAllAssistance()
      console.log(data)
      return data
    },
  })
}
