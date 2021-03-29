import React from 'react';
import {View, StyleSheet} from 'react-native';
import SwitchSelector from 'react-native-switch-selector';

import Colors from '../../constants/Color';

const Switch = props => {
  const {selectView} = props;
  const options = [
    {
      label: 'リスト',
      value: 'list',
      testID: 'switch-list',
      accessibilityLabel: 'switch-list',
    },

    {
      label: 'マップ',
      value: 'map',
      testID: 'switch-map',
      accessibilityLabel: 'switch-map',
    },
  ];

  return (
    <View style={styles.cotainer}>
      <SwitchSelector
        initial={0}
        onPress={value => selectView(value)}
        textColor={Colors.primaryColor} //'#7a44cf'
        selectedColor="white"
        buttonColor={Colors.primaryColor}
        borderColor={Colors.primaryColor}
        hasPadding
        options={options}
        height={35}
        style={styles.button}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 180,
  },
  cotainer: {
    padding: 10,
  },
});

export default Switch;
