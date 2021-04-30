import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialIcons';

import Colors from '../../../constants/Color';

const CategoryButton = ({openRef}) => {
  return (
    <TouchableOpacity
      style={styles.fab}
      onPress={() => openRef.current.snapTo(2)}>
      <Icons name="widgets" color="white" size={26} />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  fab: {
    width: 90,
    height: 40,
    backgroundColor: 'rgba(242,153,74,0.8)',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fabText: {
    color: 'white',
  },
});
export default CategoryButton;
