import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from 'screens/home';
import Test from 'screens/test';

const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Test" component={Test} />
    </Stack.Navigator>
  );
};

export default RootStack;
