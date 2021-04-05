import React, {FC} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialIcons';

import Colors from '../../constants/Color';
import firebase from '../../constants/firebase';

const AccountEditScreen: FC = props => {
  var user = firebase.auth().currentUser;
  var name, email, uid;

  if (user != null) {
    name = user.displayName;
    email = user.email;
    uid = user.uid;
    photoUrl = user.photoURL;
  }

  const logout = () => {
    firebase.auth().signOut();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.usernameContainer}>
        <View style={styles.labelContainer}>
          <Icons name="account-box" color="gray" size={30} />
          <Text style={styles.label}>ユーザー名</Text>
        </View>
        <Text style={styles.username}>{name} ▶︎</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.usernameContainer}>
        <View style={styles.labelContainer}>
          <Icons name="photo" color="gray" size={30} />
          <Text style={styles.label}>ユーザー画像</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{uri: photoUrl}} />
          <Text style={styles.username}>▶︎</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.usernameContainer}>
        <View style={styles.labelContainer}>
          <Icons name="library-books" color="gray" size={30} />
          <Text style={styles.label}>ID</Text>
        </View>
        <Text style={styles.username}>{uid}</Text>
      </View>
      <View style={styles.usernameContainer}>
        <View style={styles.labelContainer}>
          <Icons name="email" color="gray" size={30} />
          <Text style={styles.label}>メールアドレス</Text>
        </View>
        <Text style={styles.username}>{email}</Text>
      </View>
      <View style={styles.logoutContainer}>
        <TouchableOpacity style={styles.logout} onPress={logout}>
          <Text style={styles.logoutText}>ログアウト</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 10,
  },
  labelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: '400',
    paddingLeft: 5,
  },
  usernameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  username: {
    fontSize: 15,
    fontWeight: '500',
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 50,
    marginRight: 3,
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  userid: {
    fontSize: 12,
    color: 'gray',
  },
  logoutContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
  },
  logout: {
    borderRadius: 15,
    borderWidth: 0.5,
    borderColor: Colors.gray,
    width: 130,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoutText: {
    fontSize: 18,
    fontWeight: '500',
    color: Colors.gray,
  },
});

export default AccountEditScreen;
