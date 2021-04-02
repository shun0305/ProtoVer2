import React, {FC} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import OnboardingScreen from '../Onboarding/OnboardingScreen';
import StartScreen from '../Auth/StartScreen';
import SignInScreen from '../Auth/SignInScreen';
import SignUpScreen from '../Auth/SignUpScreen';

const {Navigator, Screen} = createStackNavigator();

const AuthStack: FC = props => {
  return (
    <Navigator initialRouteName={'onboarding'}>
      <Screen
        name="onboarding"
        component={OnboardingScreen}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="start"
        component={StartScreen}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="signin"
        component={SignInScreen}
        options={{
          headerTitle: '',
          headerBackTitleVisible: false,
        }}
      />
      <Screen
        name="signup"
        component={SignUpScreen}
        options={{
          headerTitle: '',
          headerBackTitleVisible: false,
        }}
      />
    </Navigator>
  );
};

export default AuthStack;
