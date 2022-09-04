import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axiosInstance from '../../api/axios'

const initialState = {
  username: '',
  email: '',
  password: '',
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
  },
})

export const handleSignUp = createAsyncThunk(
  'singUp/handlerSignUp',
  async ({ username, email, password }) => {
    try {
      const answer = await axiosInstance.post('/registration', {
        username,
        email,
        password,
      })
      console.log('handleSignUp good')
      console.log(answer)
    } catch (error) {
      console.log('handleSignUp error')
      console.log(error.response)
    }
  }
)

export const { setUsername, setEmail, setPassword } = signUpSlice.actions

export default signUpSlice.reducer
