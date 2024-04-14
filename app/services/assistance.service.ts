import http from '../api/index'
import TokenService from './token.service'

export interface IAssistance {
  id: number
  type: string
  name: string
  description: string
  subDescription: string
  workingStartTime: string
  workingEndTime: string
  email: string
  phoneNumbers: IPhoneNumbers[]
  locations: ILocations[]
}

export interface IPhoneNumbers {
  id: number
  phoneNumber: string
}

export interface ILocations {
  id: number
  location: string
  longitude: number
  latitude: number
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
