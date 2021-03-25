import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import OnboardingScreen from './src/screens/Onboarding/OnboardingScreen';
import Navigation from './src/screens/Navigation';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={'home'}>
        <Stack.Screen name="onboading" component={OnboardingScreen} />
        <Stack.Screen name="home" component={Navigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
