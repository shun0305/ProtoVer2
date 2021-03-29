import React, {FC, useState} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';

const SearchListScreen: FC = props => {
  return (
    <View>
      <Text style={styles.header}>カテゴリーで検索</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  header: {
    fontSize: 18,
    fontWeight: '700',
  },
});

export default SearchListScreen;
