import React from 'react'
import { persistor, store } from './src/redux/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { NativeBaseProvider } from 'native-base'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import GeneralRoute from './src/route/GeneralRoute'
import { injectStore } from './src/api/axios'
injectStore(store)

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NativeBaseProvider>
          <SafeAreaProvider>
            <NavigationContainer>
              <GeneralRoute />
            </NavigationContainer>
          </SafeAreaProvider>
        </NativeBaseProvider>
      </PersistGate>
    </Provider>
  )
}
