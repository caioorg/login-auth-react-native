import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../../screen/Home';

import Routes from '../enums';

const App = createNativeStackNavigator();

const Logged = () => (
  <App.Navigator initialRouteName={Routes.HOME}>
    <App.Screen
      name={Routes.HOME}
      component={Home}
      options={{headerShown: false}}
    />
  </App.Navigator>
);

export default Logged;
