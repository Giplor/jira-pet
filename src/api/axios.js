import axios from 'axios'
import dayjs from 'dayjs'
import jwtDecode from 'jwt-decode'

let store

export const injectStore = (_store) => {
  store = _store
}
const axiosInstance = axios.create({
  baseURL: 'https://jirapet-python.herokuapp.com/api',
  timeout: 10000,
})

axiosInstance.interceptors.request.use(
  async (config) => {
    const token = store.getState().tokens.accessToken
    if (token) {
      config.headers['Authorization'] = 'Bearer ' + token
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true
      const token = store.getState().tokens.refreshToken
      if (token) {
        let decoded = jwtDecode(token)
        const expirationDate = dayjs(decoded.exp)
        const currentDate = dayjs()
        if (currentDate.diff(expirationDate) > 0) {
          const answer = await axios.post(
            'https://jirapet-python.herokuapp.com/api/refresh',
            {
              refresh: token,
            }
          )
          store.dispatch({
            type: 'tokens/setAccessToken',
            payload: answer.data.access,
          })
          return axiosInstance(originalRequest)
        }
      }
    }
    return Promise.reject(error)
  }
)
export default axiosInstance
