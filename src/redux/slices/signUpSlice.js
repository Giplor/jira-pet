import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axiosInstance from '../../api/axios'

export const signUp = createAsyncThunk(
  'singUp/handleSignUp',
  async ({ username, email, password }, { dispatch }) => {
    try {
      dispatch(setIsLoading(true))
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
