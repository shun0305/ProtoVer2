import React, {FC} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

import firebase from '../../constants/firebase';

const AccountScreen: FC = () => {
  var user = firebase.auth().currentUser;
  var name, email, photoUrl, uid, emailVerified;

  if (user != null) {
    name = user.displayName;
    email = user.email;
    photoUrl = user.photoURL;
    emailVerified = user.emailVerified;
    uid = user.uid; // The user's ID, unique to the Firebase project. Do NOT use
    // this value to authenticate with your backend server, if
    // you have one. Use User.getToken() instead.
  }

  function signOut() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log('sign out');
      })
      .catch(error => alert(error.message));
  }

  return (
    <View style={styles.container}>
      <Text>Account Screen</Text>
      <Button title="sign out" onPress={() => signOut()} />
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

export default AccountScreen;
