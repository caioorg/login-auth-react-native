import React, { useEffect } from 'react'
import { AppState } from 'react-native'
import SplashScreen from 'react-native-splash-screen'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { AuthProvider } from '@app/contexts/auth'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Navigation from './navigation'

const App = () => {
  useEffect(() => {
    SplashScreen.hide()
  })

  useEffect(() => {
    const sub = AppState.addEventListener('change', async nextAppState => {
      if (['inactive', 'background'].includes(nextAppState)) {
        await AsyncStorage.clear()
      }
    })

    return async () => {
      sub.remove()
    }
  }, [])

  return (
    <SafeAreaProvider>
      <AuthProvider>
        <Navigation />
      </AuthProvider>
    </SafeAreaProvider>
  )
}

export default App
