import { configureStore } from '@reduxjs/toolkit'
import signUpReducer from './slices/signUpSlice'
import signInReducer from './slices/signInSlice'
import tokensReducer from './slices/tokensSlice'

export const store = configureStore({
  reducer: {
    signUp: signUpReducer,
    signIn: signInReducer,
    tokens: tokensReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})
