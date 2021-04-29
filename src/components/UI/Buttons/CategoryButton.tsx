import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';

import Colors from '../../../constants/Color';

const CategoryButton = ({openRef}) => {
  return (
    <TouchableOpacity
      style={styles.fab}
      onPress={() => openRef.current.snapTo(2)}>
      <Text>カテゴリー検索</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  fab: {
    width: 150,
    height: 150,
    backgroundColor: Colors.primaryColor,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default CategoryButton;
