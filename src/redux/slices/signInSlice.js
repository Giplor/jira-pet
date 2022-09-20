import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axiosInstance from '../../api/axios'
import { setAccessToken, setRefreshToken } from './tokensSlice'

export const handleSignIn = createAsyncThunk(
  'signIn/handleSignIn',
  async (callback, { dispatch, getState }) => {
    try {
      dispatch(setIsLoading(true))
      const email = getState().signIn.email
      const password = getState().signIn.password
      const answer = await axiosInstance.post('/login', {
        email,
        password,
      })
      if (answer.data.access_token) {
        dispatch(setAccessToken(answer.data.access_token))
        dispatch(setRefreshToken(answer.data.refresh_token))
        dispatch(setEmail(''))
      }
    } catch (error) {
      console.log('error signIn/handleSignIn')
      callback?.(error.response.data.detail)
    } finally {
      dispatch(setIsLoading(false))
    }
  }
)

export const handleLogOut = createAsyncThunk(
  'signIn/handleLogOut',
  async (_, { dispatch }) => {
    try {
      dispatch(setAccessToken(null))
      dispatch(setRefreshToken(null))
    } catch (error) {
      console.log('error signIn/handleLogOut')
      console.log(error)
    }
  }
)

const initialState = {
  email: '',
  password: '',
  isLoading: false,
}

const signInSlice = createSlice({
  name: 'signIn',
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload
    },
    setPassword: (state, action) => {
      state.password = action.payload
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload
    },
  },
})

export const { setEmail, setPassword, setIsLoading } = signInSlice.actions

export default signInSlice.reducer
