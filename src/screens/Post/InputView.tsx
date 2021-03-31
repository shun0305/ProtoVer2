import React, {FC} from 'react';
import {View, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialIcons';

import Colors from '../../constants/Color';

const InputView: FC = props => {
  return (
    <View style={styles.screenContainer}>
      <View>
        <TouchableOpacity
          onPress={() => props.setModalVisible(!props.modalVisible)}
          style={styles.icon}>
          <Icons name={props.iconName} size={24} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.screen}>
        <TextInput
          value={props.value}
          placeholder="あなたが見つけたTipsを共有しよう"
          placeholderTextColor="gray"
          keyboardType="default"
          numberOfLines={5}
          multiline={true}
          style={styles.inputText}
          onChangeText={props.setText}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginLeft: 10,
  },
  screen: {
    width: '82%',
    height: 300,
  },
  icon: {
    backgroundColor: Colors.primaryColor,
    borderRadius: 50,
    padding: 5,
    marginRight: 10,
    marginLeft: 10,
    width: 35,
    height: 35,
  },
  inputText: {
    fontSize: 18,
    width: '90%',
  },
});

export default InputView;
