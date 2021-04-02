import React, {FC} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Navigation from '../Navigation/Navigation';
import PostScreen from '../Post/PostScreen';
import HomeDepartScreen from '../Home/HomeDepart';
import DetailScreen from '../Post/DetailScreen';
import SearchCategoryScreen from '../Search/SearchCategoryScreen';

const {Navigator, Screen} = createStackNavigator();

const AppStack: FC = () => {
  return (
    <Navigator initialRouteName={'home'}>
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
      <Screen
        name="category"
        component={SearchCategoryScreen}
        options={({route}) => ({
          title: route.params.category,
          headerBackTitleVisible: false,
        })}
      />
    </Navigator>
  );
};

export default AppStack;
