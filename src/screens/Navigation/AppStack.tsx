import React, {FC} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Navigation from '../Navigation/Navigation';
import PostScreen from '../Post/PostScreen';
import SearchScreen from '../Search/SearchScreen';
import HomeDepartScreen from '../Home/HomeDepart';
import DepartAnime from '../Home/DepartAnime';
import DetailScreen from '../Post/DetailScreen';
import SearchCategoryScreen from '../Search/SearchCategoryScreen';
import AccountEditScreen from '../Account/AccountEditScreen';

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
      <Screen
        name="departanm"
        component={DepartAnime}
        options={{headerShown: false}}
      />
      <Screen name="post" component={PostScreen} />
      <Screen name="search" component={SearchScreen} />
      <Screen
        name="detail"
        component={DetailScreen}
        options={({route}) => ({
          title: route.params.place,
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
      <Screen
        name="accountedit"
        component={AccountEditScreen}
        options={{
          headerTitle: 'アカウント情報',
          headerTitleStyle: {
            fontSize: 22,
            fontWeight: '600',
          },
          headerBackTitleVisible: false,
        }}
      />
    </Navigator>
  );
};

export default AppStack;
