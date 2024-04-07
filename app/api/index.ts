import axios, { AxiosInstance, AxiosError, AxiosRequestConfig } from 'axios'
import TokenService from '../services/token.service'

const axiosInstance: AxiosInstance = axios.create({
  withCredentials: true,
  baseURL: 'http://192.168.187.92:8222/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
})

const refreshAccessToken = async (refreshToken: string): Promise<string | null> => {
  try {
    const response = await axios.get('/auth/account/refresh-token', {
      headers: {
        Authorization: `Bearer ${refreshToken}`,
      },
    })

    return response.data.accessToken
  } catch (error) {
    console.error('Error refreshing access token:', error)
    return null
  }
}

axiosInstance.interceptors.request.use(
  (response) => {
    return response
  },
  async (error) => {
    const originalRequest = error.config as AxiosRequestConfig

    if (error.response?.status === 401 && originalRequest?.url != '/auth/account/login') {
      const refreshToken = await TokenService.getLocalRefreshToken()

      if (refreshToken) {
        try {
          const newAccessToken = await refreshAccessToken(refreshToken)

          if (newAccessToken !== null) {
            originalRequest.headers = originalRequest.headers || {}
            originalRequest.headers.Authorization = `Bearer ${newAccessToken}`

            return axiosInstance(originalRequest)
          }
        } catch (error) {
          // Handle refresh token failure
          console.error('Error refreshing access token:', error)
          // Redirect to login or handle logout
          // Example: history.push('/login');
        }
      } else {
        // No refresh token found, redirect to login or handle logout
        // Example: history.push('/login');
      }
    }

    return Promise.reject(error)
  }
)

export default axiosInstance
