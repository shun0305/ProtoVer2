import React, {FC, useState} from 'react';
import {View, Text, TouchableOpacity, Alert, StyleSheet} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';

import Colors from '../../constants/Color';
import Input from '../../components/UI/Input';
import Button from '../../components/UI/Button';
import SNS from '../../components/UI/SNS';
import firebase from '../../constants/firebase';

import {AuthNavigatorParamsList} from '../../types/NavigationTypes';

export interface SignUpProps {
  navigation: StackNavigationProp<AuthNavigatorParamsList, 'signup'>;
}

const SignUpScreen: FC<SignUpProps> = props => {
  const {navigation} = props;

  const [name, setName] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);
  const [confPassword, setConfPassword] = useState<string | null>(null);

  const signup = async () => {
    if (password === confPassword) {
      try {
        const user = await firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(res => {
            res.user.updateProfile({
              displayName: name,
            });
          });
        if (user) {
          await firebase
            .firestore()
            .collection('users')
            .doc(user.uid)
            .set({name, email, password});
          Alert.alert('登録完了', 'Hava a Good Travel!!');
        }
      } catch (error) {
        Alert.alert(error);
      }
    } else {
      Alert.alert('Error', 'Password is not same');
    }
  };

  // function signUp() {
  //   if (password === confPassword) {
  //     firebase
  //       .auth()
  //       .createUserWithEmailAndPassword(email, password)
  //       .then(res => {
  //         res.user.updateProfile({
  //           displayName: name,
  //         });
  //         if (res) {
  //           console.log('Success to Signup');
  //           navigation.navigate('signin');
  //         }
  //       })
  //       .catch(error => {
  //         console.log(error);
  //       });
  //   } else {
  //     alert('password is not same');
  //   }
  // }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Senjin</Text>
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
        secureTextEntry={true}
      />
      <Input
        placeholder="パスワード(確認用)"
        onChangeText={text => setConfPassword(text)}
        secureTextEntry={true}
      />
      <TouchableOpacity onPress={() => navigation.navigate('signin')}>
        <Text style={styles.login}>ログイン</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={signup}>
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
    height: 45,
    backgroundColor: Colors.primaryColor,
    borderRadius: 15,
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
