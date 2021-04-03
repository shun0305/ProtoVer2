import React, {FC, Dispatch, SetStateAction} from 'react';
import {View, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialIcons';

import Colors from '../../constants/Color';

interface InputViewProp {
  setModalVisible: (modalVisible: boolean) => void;
  setText: Dispatch<SetStateAction<string | null>>;
  modalVisible: boolean;
  iconName: string;
  value: string;
}

const InputView: FC<InputViewProp> = props => {
  const {setModalVisible, setText, modalVisible, iconName, value} = props;
  return (
    <View style={styles.screenContainer}>
      <View>
        <TouchableOpacity
          onPress={() => setModalVisible(!modalVisible)}
          style={styles.icon}>
          <Icons name={iconName} size={24} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.screen}>
        <TextInput
          value={value}
          placeholder="あなたが見つけたTipsを共有しよう"
          placeholderTextColor="gray"
          keyboardType="default"
          numberOfLines={5}
          multiline={true}
          style={styles.inputText}
          onChangeText={setText}
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
    // height: 300,
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
