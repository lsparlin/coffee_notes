import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from 'screens/home';
import CoffeeNote from 'screens/coffeeNote';

import type {RootStackParamList} from './rootStack.types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="CoffeeNote" component={CoffeeNote} />
    </Stack.Navigator>
  );
};

export default RootStack;
