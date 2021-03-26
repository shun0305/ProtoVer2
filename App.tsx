import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, HeaderBackButton} from '@react-navigation/stack';

import OnboardingScreen from './src/screens/Onboarding/OnboardingScreen';
import Navigation from './src/screens/Navigation';
import PostScreen from './src/screens/Post/PostScreen';
import HomeDepartScreen from './src/screens/Home/HomeDepart';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'home'}>
        <Stack.Screen name="onboading" component={OnboardingScreen} />
        <Stack.Screen
          name="home"
          component={Navigation}
          options={{headerShown: false}}
        />
        <Stack.Screen name="post" component={PostScreen} />
        <Stack.Screen
          name="depart"
          component={HomeDepartScreen}
          options={{
            headerTitle: 'ステータスを旅行中にする',
            headerRight: () => (
              <HeaderBackButton
                onPress={() => {
                  // Do something
                }}
              />
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
