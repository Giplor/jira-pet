import { configureStore } from '@reduxjs/toolkit'
import signUpReducer from './slices/signUpSlice'

export const store = configureStore({
  reducer: {
    signUp: signUpReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})
