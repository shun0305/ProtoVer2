import React, {FC} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SignInScreen from '../Auth/SignInScreen';
import SignUpScreen from '../Auth/SignUpScreen';

const {Navigator, Screen} = createStackNavigator();

const AuthStack: FC = () => {
  return (
    <Navigator initialRouteName={'signin'} screenOptions={{headerShown: false}}>
      <Screen name="signin" component={SignInScreen} />
      <Screen name="signup" component={SignUpScreen} />
    </Navigator>
  );
};

export default AuthStack;
