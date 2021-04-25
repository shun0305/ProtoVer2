import * as React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialIcons';

import Colors from '../../../constants/Color';

const FloatButton = () => {
  return (
    <TouchableOpacity style={styles.fab}>
      <Icons name="edit" color="white" size={26} />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    width: 50,
    height: 50,
    backgroundColor: Colors.primaryColor,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 15,
    top: 500,
  },
});
export default FloatButton;
