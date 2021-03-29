import React, {FC} from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';

import SearchBar from '../../components/UI/SearchBar';

const SearchScreen: FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <SearchBar placeholder="地名で検索" />
        <Text>Search Screen</Text>
      </View>
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
