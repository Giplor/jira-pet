import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  accessToken: null,
  refreshToken: null,
}

const tokensSlice = createSlice({
  name: 'tokens',
  initialState,
  reducers: {
    setAccessToken: (state, action) => {
      state.accessToken = action.payload
    },
    setRefreshToken: (state, action) => {
      state.refreshToken = action.payload
    },
  },
})

export const { setAccessToken, setRefreshToken } = tokensSlice.actions

export default tokensSlice.reducer
