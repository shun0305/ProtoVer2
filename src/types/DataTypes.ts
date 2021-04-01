import {Dispatch, SetStateAction} from 'react';
import {AppNavigatorParamsList} from './NavigationTypes';
import {StackNavigationProp} from '@react-navigation/stack';

export type PostProps = {
  info: string | null;
  setInfo: Dispatch<SetStateAction<string | null>>;
  iconName: string;
  setIconName: Dispatch<SetStateAction<string | null>>;
  text: string | null;
  setText: Dispatch<SetStateAction<string | null>>;
  navigation: StackNavigationProp<AppNavigatorParamsList>;
};
