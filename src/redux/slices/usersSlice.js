import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axiosInstance from '../../api/axios'

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async (_, { dispatch }) => {
    try {
      const answer = await axiosInstance.get('/users')
      dispatch(setUsers(answer.data))
    } catch (error) {
      console.log('error fetchUsers')
      console.log(error.response.data)
    }
  }
)

const initialState = {
  users: [],
}

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload
    },
  },
})

export const { setUsers } = usersSlice.actions

export default usersSlice.reducer
