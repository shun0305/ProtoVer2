import React, {FC, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import SearchBar from '../../components/UI/SearchBar';
import Switch from '../../components/UI/Switch';
import SearchListScreen from './SearchListScreen';

const SearchScreen: FC = () => {
  const [view, selectView] = useState<string>('list');

  return (
    <View style={styles.screen}>
      {view === 'list' ? (
        <View style={styles.container}>
          <View style={styles.barAndButton}>
            <SearchBar placeholder="地名で検索" />
            <Switch selectView={selectView} />
          </View>
          <SearchListScreen />
        </View>
      ) : (
        <View style={styles.container}>
          <View style={styles.barAndButton}>
            <SearchBar placeholder="地名で検索" />
            <Switch selectView={selectView} />
            <Text>Map Screen</Text>
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
