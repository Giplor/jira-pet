import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axiosInstance from '../../api/axios'
import { setAccessToken, setRefreshToken } from './tokensSlice'

export const signIn = createAsyncThunk(
  'signIn/handleSignIn',
  async ({ email, password, callback }, { dispatch }) => {
    try {
      dispatch(setIsLoading(true))
      const answer = await axiosInstance.post('/login', {
        email,
        password,
      })
      if (answer.data.access_token) {
        dispatch(setAccessToken(answer.data.access_token))
        dispatch(setRefreshToken(answer.data.refresh_token))
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
  isLoading: false,
}

const signInSlice = createSlice({
  name: 'signIn',
  initialState,
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload
    },
  },
})

export const { setIsLoading } = signInSlice.actions

export default signInSlice.reducer
