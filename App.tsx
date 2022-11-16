import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import RootStack from './app/navigation/rootStack';

const linking = {
  prefixes: ['coffeeNotes://'],
  config: {
    screens: {
      Home: 'home',
      CoffeeNote: 'coffee_note/:coffeeNoteId?',
    },
  },
};

const App = () => (
  <NavigationContainer linking={linking}>
    <RootStack />
  </NavigationContainer>
);

export default App;
