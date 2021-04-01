import React, {FC, useState} from 'react';
import {View, StyleSheet} from 'react-native';

import {StackNavigationProp} from '@react-navigation/stack';
import {AppNavigatorParamsList} from '../../types/NavigationTypes';

import SearchBar from '../../components/UI/SearchBar';
import Switch from '../../components/UI/Switch';
import SearchListScreen from './SearchListScreen';
import SearchMapScreen from './SearchMapScreen';

export interface SearchProps {
  navigation: StackNavigationProp<AppNavigatorParamsList, 'home'>;
}

const SearchScreen: FC<SearchProps> = props => {
  const {navigation} = props;
  const [view, selectView] = useState<string>('list');

  return (
    <View style={styles.screen}>
      {view === 'list' ? (
        <View style={styles.container}>
          <View style={styles.barAndButton}>
            <SearchBar placeholder="地名で検索" />
            <Switch selectView={selectView} />
          </View>
          <SearchListScreen navigation={navigation} />
        </View>
      ) : (
        <View style={styles.container}>
          <View style={styles.barAndButton}>
            <SearchBar placeholder="地名で検索" />
            <Switch selectView={selectView} />
            <SearchMapScreen />
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: 'white',
    height: '100%',
  },
  container: {
    backgroundColor: 'white',
    paddingTop: 50,
  },
  barAndButton: {
    alignItems: 'center',
    paddingBottom: 5,
  },
});

export default SearchScreen;
