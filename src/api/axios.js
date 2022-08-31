import axios from 'axios'

const axiosInstance = axios.create({})

axiosInstance.interceptors.request.use(
  (config) => {
    const token = 'ddd'
    if (token) {
      config.headers['Authorization'] = 'Bearer' + token
    }
    return config
  },
  (error) => {
    Promise.reject(error)
  }
)
