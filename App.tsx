import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import RootStack from './app/navigation/rootStack';

const linking = {
  prefixes: ['coffeeNotes://'],
  config: {
    screens: {
      Home: 'home',
      Test: {
        path: 'test/:id?',
      },
    },
  },
};

const App = () => (
  <NavigationContainer linking={linking}>
    <RootStack />
  </NavigationContainer>
);

export default App;
