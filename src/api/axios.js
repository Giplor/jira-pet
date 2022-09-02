import axios from 'axios'
import { useSelector } from 'react-redux'

export const axiosInstance = axios.create({
  baseURL: 'https://jirapet-python.herokuapp.com/api',
  timeout: 10000,
})

axiosInstance.interceptors.request.use(
  async (config) => {
    const token = useSelector((state) => state.tokens.accessToken)
    if (token) {
      config.headers['Authorization'] = 'Bearer' + token
    }
    return config
  },
  (error) => {
    Promise.reject(error)
  }
)
