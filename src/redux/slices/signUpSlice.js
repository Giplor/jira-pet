import { createSlice } from '@reduxjs/toolkit'

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

export const { setUsername, setEmail, setPassword } = signUpSlice.actions

export default signUpSlice.reducer
