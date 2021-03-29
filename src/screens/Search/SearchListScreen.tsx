import React, {FC, useState} from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';

import SearchBar from '../../components/UI/SearchBar';
import Switch from '../../components/UI/Switch';

const SearchListScreen: FC = props => {
  const {selectView} = props;
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <SearchBar placeholder="地名で検索" />
        <Switch selectView={selectView} />
        <Text>List Screen</Text>
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

export default SearchListScreen;
