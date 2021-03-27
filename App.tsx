import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import AppStack from './src/screens/Navigation/AppStack';

export default function App() {
  const auth = true;

  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
}
