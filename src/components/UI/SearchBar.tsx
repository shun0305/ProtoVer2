import React, {FC} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

import Colors from '../../constants/Color';

interface SearchProps {
  placeholder: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
}

const SearchBar: FC<SearchProps> = props => {
  const {placeholder, onChangeText, secureTextEntry} = props;
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry || false}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {margin: 5},
  input: {
    fontSize: 18,
    width: 330,
    height: 40,
    borderRadius: 30,
    backgroundColor: Colors.lightGray,
    padding: 5,
    paddingLeft: 10,
  },
});

export default SearchBar;
