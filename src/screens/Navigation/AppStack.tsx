import React, {FC} from 'react';
import {createStackNavigator, HeaderBackButton} from '@react-navigation/stack';

import OnboardingScreen from '../Onboarding/OnboardingScreen';
import Navigation from '../Navigation/Navigation';
import PostScreen from '../Post/PostScreen';
import HomeDepartScreen from '../Home/HomeDepart';

const {Navigator, Screen} = createStackNavigator();

const AppStack: FC = () => {
  return (
    <Navigator initialRouteName={'home'}>
      <Screen name="onboading" component={OnboardingScreen} />
      <Screen
        name="home"
        component={Navigation}
        options={{headerShown: false}}
      />
      <Screen name="post" component={PostScreen} />
      <Screen
        name="depart"
        component={HomeDepartScreen}
        options={{
          headerTitle: 'ステータスを旅行中にする',
          headerBackTitleVisible: false,
        }}
      />
    </Navigator>
  );
};

export default AppStack;
