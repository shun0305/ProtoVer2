import React, {FC, useState} from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';

import SearchBar from '../../components/UI/SearchBar';
import Switch from '../../components/UI/Switch';

const SearchScreen: FC = () => {
  const [view, selectView] = useState<string>('list');

  return (
    <SafeAreaView style={styles.container}>
      {view === 'list' ? (
        <View>
          <SearchBar placeholder="地名で検索" />
          <Switch selectView={selectView} />
          <Text>List Screen</Text>
        </View>
      ) : (
        <View>
          <SearchBar placeholder="地名で検索" />
          <Switch selectView={selectView} />
          <Text>Map Screen</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

export default SearchScreen;
