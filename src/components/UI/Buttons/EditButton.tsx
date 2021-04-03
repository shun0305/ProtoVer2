import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Colors from '../../../constants/Color';

const EditButton: FC = () => {
  return (
    <View style={styles.button}>
      <Text style={styles.text}>編集する</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 15,
    borderWidth: 0.5,
    borderColor: Colors.primaryColor,
    backgroundColor: Colors.primaryColor,
    width: 75,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontWeight: '500',
  },
});

export default EditButton;
