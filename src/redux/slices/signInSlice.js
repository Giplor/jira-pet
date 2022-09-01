import { createSlice } from '@reduxjs/toolkit'

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
