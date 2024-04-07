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
  async getMe() {
    const accessToken = await TokenService.getLocalAccessToken()
    if (!accessToken) {
      throw new Error('No access token available')
    }

    console.log(accessToken)

    return await http.get<IUser>('/auth/user/me', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
  }
}

export default new UserService()
