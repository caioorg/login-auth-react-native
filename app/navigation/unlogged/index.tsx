import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SignIn from '../../screen/SignIn';
import Welcome from '../../screen/Welcome';
import Routes from '../enums';

const App = createNativeStackNavigator();

const UnLoggedIn = () => (
  <App.Navigator
    initialRouteName={Routes.WELCOME}
    screenOptions={{
      headerShown: false,
    }}>
    <App.Screen name={Routes.SIGNIN} component={SignIn} />
    <App.Screen name={Routes.WELCOME} component={Welcome} />
  </App.Navigator>
);

export default UnLoggedIn;
