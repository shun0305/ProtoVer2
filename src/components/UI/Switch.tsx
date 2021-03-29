import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import SwitchSelector from 'react-native-switch-selector';

import Colors from '../../constants/Color';

const Switch = () => {
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
    <SafeAreaView>
      <View>
        <SwitchSelector
          initial={0}
          onPress={value => console.log(`Call onPress with value: ${value}`)}
          textColor={Colors.primaryColor} //'#7a44cf'
          selectedColor="white"
          buttonColor={Colors.primaryColor}
          borderColor={Colors.primaryColor}
          hasPadding
          options={options}
          height={35}
          style={{width: 180}}
        />
      </View>
    </SafeAreaView>
  );
};

export default Switch;
