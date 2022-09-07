import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axiosInstance from '../../api/axios'
import { setAccessToken, setRefreshToken } from './tokensSlice'

export const handleSignIn = createAsyncThunk(
  'signIn/handleSignIn',
  async (_, { dispatch, getState }) => {
    try {
      const email = getState().signIn.email
      const password = getState().signIn.password
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
      console.log(error.response.data)
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
  },
})

export const { setEmail, setPassword } = signInSlice.actions

export default signInSlice.reducer
