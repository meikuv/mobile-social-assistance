import http from '../api'
import TokenService from './token.service'

export interface IUser {
  id?: string
  firstName?: string
  lastName?: string
  username?: string
  email?: string
}

class UserService {
  async getMe() {
    const accessToken = await TokenService.getLocalAccessToken()
    if (!accessToken) {
      throw new Error('No access token available')
    }

    return await http.get<IUser>('/auth/user/me', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
  }

  async updateProfile(user: IUser | undefined) {
    const accessToken = await TokenService.getLocalAccessToken()
    if (!accessToken) {
      throw new Error('No access token available')
    }

    return await http.post<any>('/auth/user/profile-update', user, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
  }
}

export default new UserService()
