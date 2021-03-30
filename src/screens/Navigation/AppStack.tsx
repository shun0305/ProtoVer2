import React, {FC} from 'react';
import {
  createStackNavigator,
  HeaderBackButton,
  HeaderTitle,
} from '@react-navigation/stack';

import OnboardingScreen from '../Onboarding/OnboardingScreen';
import Navigation from '../Navigation/Navigation';
import PostScreen from '../Post/PostScreen';
import HomeDepartScreen from '../Home/HomeDepart';
import DetailScreen from '../Post/DetailScreen';

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
      <Screen
        name="depart"
        component={HomeDepartScreen}
        options={{
          headerTitle: 'ステータスを旅行中にする',
          headerBackTitleVisible: false,
        }}
      />
      <Screen name="post" component={PostScreen} />
      <Screen
        name="detail"
        component={DetailScreen}
        options={({route}) => ({
          title: route.params.place[0] + ',' + route.params.place[1],
          headerBackTitleVisible: false,
        })}
      />
    </Navigator>
  );
};

export default AppStack;
