import React, {FC} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

interface InputProps {
  placeholder: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
}

const Input: FC<InputProps> = props => {
  const {placeholder, onChangeText, secureTextEntry} = props;
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry || false}
        onChangeText={onChangeText}
        autoCapitalize="none"
        autoCorrect={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {margin: 5},
  input: {
    fontSize: 18,
    width: 250,
    height: 50,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: 'gray',
    padding: 5,
  },
});

export default Input;
