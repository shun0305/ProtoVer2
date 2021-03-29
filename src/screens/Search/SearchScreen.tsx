import React, {FC, useState} from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';

import SearchBar from '../../components/UI/SearchBar';
import Switch from '../../components/UI/Switch';

const SearchScreen: FC = () => {
  const [view, selectView] = useState<string>('list');

  return (
    <View>
      {view === 'list' ? (
        <View style={styles.container}>
          <View style={styles.barAndButton}>
            <SearchBar placeholder="地名で検索" />
            <Switch selectView={selectView} />
          </View>
          <Text>List Screen</Text>
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
  container: {
    backgroundColor: 'white',
    paddingTop: 50,
    alignItems: 'center',
  },
  barAndButton: {
    alignItems: 'center',
  },
});

export default SearchScreen;
