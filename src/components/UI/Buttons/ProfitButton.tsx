import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Colors from '../../../constants/Color';

const ProfitButton: FC = () => {
  return (
    <View style={styles.button}>
      <Text style={styles.text}>おすすめ</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 15,
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

export default ProfitButton;
