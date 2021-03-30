import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Colors from '../../../constants/Color';

const WarnButton: FC = () => {
  return (
    <View style={styles.button}>
      <Text style={styles.text}>気をつけて</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 15,
    backgroundColor: Colors.redColor,
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

export default WarnButton;
