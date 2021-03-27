import React, {FC} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SignInScreen from '../Auth/SignInScreen';
import SignUpScreen from '../Auth/SignUpScreen';

const {Navigator, Screen} = createStackNavigator();

const AuthStack: FC = () => {
  return (
    <Navigator initialRouteName={'signup'}>
      <Screen
        name="signin"
        component={SignInScreen}
        options={{
          headerTitle: '',
        }}
      />
      <Screen
        name="signup"
        component={SignUpScreen}
        options={{
          headerTitle: '',
        }}
      />
    </Navigator>
  );
};

export default AuthStack;
