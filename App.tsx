import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import AuthStack from './src/screens/Navigation/AuthStack';
import AppStack from './src/screens/Navigation/AppStack';

import firebase from './src/constants/firebase';

export default function App() {
  const [auth, setAuth] = useState(null);

  const boot = () => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        setAuth(user);
      }
    });
  };

  useEffect(() => {
    boot();
  }, []);

  return (
    <NavigationContainer>
      {auth !== null ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
