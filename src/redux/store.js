import { configureStore } from '@reduxjs/toolkit'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import { combineReducers } from '@reduxjs/toolkit'
import signUpReducer from './slices/signUpSlice'
import signInReducer from './slices/signInSlice'
import tokensReducer from './slices/tokensSlice'
import projectsReducer from './slices/projectsSlice'
import tasksReducer from './slices/tasksSlice'

const reducers = combineReducers({
  signUp: signUpReducer,
  signIn: signInReducer,
  tokens: tokensReducer,
  projects: projectsReducer,
  tasks: tasksReducer,
})

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['tokens'],
}

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)
