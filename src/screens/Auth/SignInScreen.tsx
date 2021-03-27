import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Input from '../../components/UI/Input';

const SignInScreen: FC = () => {
  return (
    <View style={styles.container}>
      <Text>Sign In Screen</Text>
      <Input
        placeholder="ユーザー名"
        onChangeText={text => console.log(text)}
      />
      <Input
        placeholder="パスワード"
        onChangeText={text => console.log(text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SignInScreen;
