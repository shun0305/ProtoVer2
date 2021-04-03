import React, {FC, useState} from 'react';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import Icons from 'react-native-vector-icons/MaterialIcons';

import firebase from '../../constants/firebase';

const AccountScreen: FC = props => {
  const [img, setImg] = useState(null);

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

  const signout = () => {
    firebase.auth().signOut();
  };

  console.log(name);

  return (
    <View style={styles.container}>
      <Text>Account Screen</Text>
      <Button title="sign out" onPress={signout} />
      <Text>{name}</Text>
      {img !== null ? (
        <TouchableOpacity
          style={styles.imageButton}
          onPress={() =>
            ImagePicker.openPicker({
              width: 1000,
              height: 1000,
              cropping: true,
              cropperCircleOverlay: true,
            }).then(image => {
              // 画像トリミング後に行いたい処理を記述
              console.log(image);
              setImg(image);
            })
          }>
          <Image style={styles.image} source={{uri: img.path}} />
          <Text>画像変更</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.imageButton}
          onPress={() =>
            ImagePicker.openPicker({
              width: 1000,
              height: 1000,
              cropping: true,
              cropperCircleOverlay: true,
            }).then(image => {
              // 画像トリミング後に行いたい処理を記述
              console.log(image);
              setImg(image);
            })
          }>
          <Icons
            name="add-photo-alternate"
            color="gray"
            size={35}
            style={styles.inputIcon}
          />
          <Text>画像変更</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  imageNull: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: 'red',
  },
});

export default AccountScreen;
