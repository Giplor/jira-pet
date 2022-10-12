import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axiosInstance from '../../api/axios'

export const signUp = createAsyncThunk(
  'singUp/handleSignUp',
  async ({ username, email, password, errorSignUp }, { dispatch }) => {
    try {
      dispatch(setIsLoading(true))
      await axiosInstance.post('/registration', {
        username,
        email,
        password,
      })
    } catch (error) {
      console.log('error singUp/handleSignUp')
      errorSignUp?.(error.response.data.username || error.response.data.email)
    } finally {
      dispatch(setIsLoading(false))
    }
  }
)

const initialState = {
  isLoading: false,
}

const signUpSlice = createSlice({
  name: 'signUp',
  initialState,
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload
    },
  },
})

export const { setIsLoading } = signUpSlice.actions

export default signUpSlice.reducer
