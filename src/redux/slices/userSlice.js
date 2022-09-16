import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axiosInstance from '../../api/axios'

export const fetchCurrentUser = createAsyncThunk(
  'user/fetchCurrentUser',
  async (_, { dispatch }) => {
    try {
      const answer = await axiosInstance.get('users/me')
      dispatch(setUser(answer.data))
    } catch (error) {
      console.log('error fetchCurrentUser')
      console.log(error.response)
    }
  }
)

const initialState = {
  user: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload
    },
  },
})

export const { setUser } = userSlice.actions

export default userSlice.reducer
