import axios from 'axios'

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
    const token = store.getState()?.tokens?.accessToken
    if (token) {
      config.headers['Authorization'] = 'Bearer ' + token
    }
    return config
  },
  (error) => {
    Promise.reject(error)
  }
)

export default axiosInstance
