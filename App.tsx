import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import AuthStack from './src/screens/Navigation/AuthStack';
import AppStack from './src/screens/Navigation/AppStack';

export default function App() {
  const auth = true;

  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
}
