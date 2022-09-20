import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axiosInstance from '../../api/axios'

export const handleSignUp = createAsyncThunk(
  'singUp/handleSignUp',
  async (_, { dispatch, getState }) => {
    try {
      dispatch(setIsLoading(true))
      const username = getState().signUp.username
      const email = getState().signUp.email
      const password = getState().signUp.password
      const answer = await axiosInstance.post('/registration', {
        username,
        email,
        password,
      })
      console.log(answer.data)
    } catch (error) {
      console.log('error singUp/handleSignUp')
      console.log(error.response.data)
    } finally {
      dispatch(setIsLoading(false))
    }
  }
)

const initialState = {
  username: '',
  email: '',
  password: '',
  isLoading: false,
}

const signUpSlice = createSlice({
  name: 'signUp',
  initialState,
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload
    },
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

export const { setUsername, setEmail, setPassword, setIsLoading } =
  signUpSlice.actions

export default signUpSlice.reducer
