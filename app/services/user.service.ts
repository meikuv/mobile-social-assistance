import http from '../api'
import TokenService from './token.service'

export interface IUser {
  id: string
  firstName: string
  lastName: string
  username: string
  email: string
}

class UserService {
  async getMe(): Promise<IUser | null> {
    try {
      const accessToken = await TokenService.getLocalAccessToken()
      if (!accessToken) {
        throw new Error('No access token available')
      }

      const response = await http.get<IUser>('/auth/profile/me', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })

      return response.data
    } catch (error) {
      console.error('Error getting user profile: ', error)
      throw error
    }
  }
}

export default new UserService()
