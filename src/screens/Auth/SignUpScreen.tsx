import React, {FC, useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

import Colors from '../../constants/Color';
import Input from '../../components/UI/Input';
import Button from '../../components/UI/Button';
import SNS from '../../components/UI/SNS';

const SignUpScreen: FC = props => {
  const [name, setName] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);
  const [confPassword, setConfPassword] = useState<string | null>(null);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>サービス名</Text>
      <View style={styles.signupContainer}>
        <Text style={styles.signup}>新規登録</Text>
      </View>
      <Input placeholder="ユーザー名" onChangeText={text => setName(text)} />
      <Input
        placeholder="メールアドレス"
        onChangeText={text => setEmail(text)}
      />
      <Input
        placeholder="パスワード"
        onChangeText={text => setPassword(text)}
      />
      <Input
        placeholder="パスワード(確認用)"
        onChangeText={text => setConfPassword(text)}
      />
      <TouchableOpacity onPress={() => props.navigation.navigate('signin')}>
        <Text style={styles.login}>ログイン</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}}>
        <Button style={styles.signupButton}>
          <Text style={styles.buttonText}>新規登録</Text>
        </Button>
      </TouchableOpacity>
      <View style={styles.orLineContainer}>
        <View style={styles.orLine} />
        <Text style={styles.orLineText}>または</Text>
        <View style={styles.orLine} />
      </View>
      <SNS />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  title: {
    fontSize: 36,
    fontWeight: '700',
    color: Colors.primaryColor,
    marginTop: 25,
  },
  signup: {
    fontSize: 24,
    fontWeight: '600',
    marginTop: 40,
    marginBottom: 10,
  },
  signupContainer: {
    marginRight: 160,
  },
  login: {
    fontSize: 16,
    fontWeight: '300',
    color: 'gray',
    marginTop: 5,
    marginBottom: 20,
    marginLeft: 180,
  },
  signupButton: {
    width: 160,
    height: 40,
    backgroundColor: Colors.primaryColor,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '700',
    color: 'white',
  },
  orLineContainer: {
    padding: 15,
    flexDirection: 'row',
  },
  orLine: {
    backgroundColor: 'gray',
    height: 0.5,
    flex: 1,
    alignSelf: 'center',
  },
  orLineText: {
    fontSize: 15,
    fontWeight: '200',
    color: 'gray',
    alignSelf: 'center',
    paddingHorizontal: 10,
  },
});

export default SignUpScreen;
