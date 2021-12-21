import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { Host } from 'react-native-portalize'

import { navigationRef } from './RootNavigation'

import UnLoggedIn from './unlogged'
import LoggedIn from './logged'
import Routes from './enums'

const Stack = createNativeStackNavigator()

const Main = () => {
  const signedIn = false

  return (
    <NavigationContainer ref={navigationRef}>
      <Host>
        <Stack.Navigator initialRouteName={Routes.UNLOGGED}>
          {signedIn ? (
            <Stack.Screen
              name={Routes.LOGGED}
              component={LoggedIn}
              options={{
                headerShown: false,
                gestureEnabled: false
              }}
            />
          ) : (
            <Stack.Screen
              name={Routes.UNLOGGED}
              component={UnLoggedIn}
              options={{
                headerShown: false,
                gestureEnabled: false,
                animationTypeForReplace: signedIn ? 'push' : 'pop'
              }}
            />
          )}
        </Stack.Navigator>
      </Host>
    </NavigationContainer>
  )
}

export default Main
