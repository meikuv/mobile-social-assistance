import http from '../api'
import TokenService from './token.service'

class AuthService {
  async login(username: string, password: string) {
    return http.post('/auth/account/login', { username, password })
  }

  async register(username: string, email: string, password: string) {
    return http.post('/auth/account/register', { username, email, password })
  }

  async verification(email: string, code: string) {
    return http.post('/auth/account/verify', { email, code })
  }

  async logout() {
    const accessToken = await TokenService.getLocalAccessToken()
    console.log(accessToken)

    return http.post('/auth/user/logout', null, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
  }
}

export default new AuthService()
