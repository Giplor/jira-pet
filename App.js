import React from 'react'
import { NativeBaseProvider } from 'native-base'
import SignUpScreen from './src/screens/AuthScreens/SignUpScreen'
import { Provider } from 'react-redux'
import { store } from './src/redux/store'
import { SafeAreaProvider } from 'react-native-safe-area-context'

export default function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <SafeAreaProvider>
          <SignUpScreen />
        </SafeAreaProvider>
      </NativeBaseProvider>
    </Provider>
  )
}
