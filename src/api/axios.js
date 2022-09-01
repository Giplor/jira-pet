import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://jirapet-python.herokuapp.com/api',
  timeout: 10000,
})

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
