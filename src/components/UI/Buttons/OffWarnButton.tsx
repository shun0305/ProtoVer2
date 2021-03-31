import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Colors from '../../../constants/Color';

const OffWarnButton: FC = () => {
  return (
    <View style={styles.button}>
      <Text style={styles.text}>気をつけて</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 15,
    borderWidth: 0.5,
    borderColor: Colors.redColor,
    backgroundColor: 'white',
    width: 75,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: Colors.redColor,
    fontWeight: '500',
  },
});

export default OffWarnButton;
