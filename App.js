import React from 'react'
import { Provider } from 'react-redux'
import { store } from './src/redux/store'
import { NativeBaseProvider } from 'native-base'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import SignUpScreen from './src/screens/AuthScreens/SignUpScreen'
import SignInScreen from './src/screens/AuthScreens/SignInScreen'

export default function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <SafeAreaProvider>
          <SignInScreen />
        </SafeAreaProvider>
      </NativeBaseProvider>
    </Provider>
  )
}
