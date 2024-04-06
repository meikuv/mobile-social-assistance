import AsyncStorage from '@react-native-async-storage/async-storage'

export interface ICredentials {
  accessToken: string
  refreshToken: string
  message: string
}

class TokenService {
  async setCredentials(credentials: ICredentials) {
    try {
      await AsyncStorage.setItem('credentials', JSON.stringify(credentials))
    } catch (error) {
      console.error('Error setting credentials in AsyncStorage: ', error)
    }
  }

  async getCredentials(): Promise<ICredentials | null> {
    try {
      const credentialsString = await AsyncStorage.getItem('credentials')
      const credentials: ICredentials | null = credentialsString
        ? JSON.parse(credentialsString)
        : null
      return credentials
    } catch (error) {
      console.error('Error getting credentials from AsyncStorage: ', error)
      return null
    }
  }

  async getLocalAccessToken(): Promise<string | undefined> {
    const credentials = await this.getCredentials()
    return credentials?.accessToken
  }

  async getLocalRefreshToken(): Promise<string | undefined> {
    const credentials = await this.getCredentials()
    return credentials?.accessToken
  }

  async clearCredentials() {
    try {
      await AsyncStorage.clear()
      console.log('AsyncStorage cleared successfully.')
    } catch (error) {
      console.error('Error clearing data from AsyncStorage:', error)
    }
  }
}

export default new TokenService()
