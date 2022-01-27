import React, { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native'

import { navigationRef } from './RootNavigation'
import AuthContext from '../contexts/auth'

import UnLoggedIn from './unlogged'
import LoggedIn from './logged'

const Routes = () => {
  const { signed } = useContext(AuthContext)

  return (
    <NavigationContainer ref={navigationRef}>
      {!signed ? <UnLoggedIn /> : <LoggedIn />}
    </NavigationContainer>
  )
}

export default Routes
