import http from '../api/index'
import TokenService from './token.service'

export interface IAssistance {
  id: number
  type: string
  name: string
  description: string
  subDescription: string
  phoneNumbers: IPhoneNumbers[]
  email: string
}

export interface IPhoneNumbers {
  id: number
  phoneNumber: string
}

class AssistanceService {
  async getAllAssistance() {
    const accessToken = await TokenService.getLocalAccessToken()
    if (!accessToken) {
      throw new Error('No access token available')
    }

    return http.get<IAssistance[]>('/assistance/getAllAssistance', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
  }
}

export default new AssistanceService()
