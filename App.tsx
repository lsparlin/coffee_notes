import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import RootStack from './app/navigation/rootStack';

const App = () => (
  <NavigationContainer>
    <RootStack />
  </NavigationContainer>
);

export default App;
