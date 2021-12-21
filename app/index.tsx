import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Navigation from './navigation'

const App = () => (
  <SafeAreaProvider>
    <Navigation />
  </SafeAreaProvider>
)

export default App
