import React, {FC, useState} from 'react';
import {View, Text, TouchableOpacity, FlatList, StyleSheet} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialIcons';

import Colors from '../../constants/Color';
import {categories} from '../../Data/CategoryData';

const SearchListScreen: FC = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>カテゴリーで検索</Text>
      <FlatList
        horizontal={true}
        data={categories}
        renderItem={({item}) => (
          <TouchableOpacity style={styles.categoryContainer}>
            <Icons name={item.icon} color={Colors.primaryColor} size={35} />
            <Text style={styles.categorytext}>{item.category}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 15,
  },
  header: {
    fontSize: 21,
    fontWeight: '700',
  },
  categoryContainer: {
    width: 70,
    height: 70,
    borderColor: Colors.primaryColor,
    borderWidth: 0.5,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  categorytext: {
    color: Colors.primaryColor,
    fontSize: 15,
  },
});

export default SearchListScreen;
