import {NavigatorScreenParams} from '@react-navigation/native';

export type AppNavigatorParamsList = {
  home: undefined;
  depart: undefined;
  post: undefined;
  detail: undefined;
  category: undefined;
};

export type AuthNavigatorParamsList = {
  start: undefined;
  signin: undefined;
  signup: undefined;
};

export type RootNavigatorParamsList = {
  Auth: NavigatorScreenParams<AuthNavigatorParamsList>;
  App: NavigatorScreenParams<AppNavigatorParamsList>;
};

export type TabNavigatorParamsList = {
  Home: undefined;
  Search: undefined;
  Post: undefined;
  Message: undefined;
  Account: undefined;
};
