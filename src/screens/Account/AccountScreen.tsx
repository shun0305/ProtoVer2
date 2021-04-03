import React, {FC, useState} from 'react';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet,
  Image,
  SafeAreaView,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import Icons from 'react-native-vector-icons/MaterialIcons';

import firebase from '../../constants/firebase';
import EditButton from '../../components/UI/Buttons/EditButton';

const AccountScreen: FC = props => {
  const [img, setImg] = useState(null);
  const [imgURL, setImgURL] = useState(null);

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

  const uploadPostImg = async () => {
    const metadata = {
      contentType: 'image/jpeg',
    };
    const postIndex = Date.now().toString();
    const storage = firebase.storage();
    const imgURI = img.path;
    const response = await fetch(imgURI);
    const blob = await response.blob();
    const uploadRef = storage.ref('images').child(`${postIndex}`);

    // storageに画像を保存
    await uploadRef.put(blob, metadata).catch(() => {
      alert('画像の保存に失敗しました');
    });

    // storageのダウンロードURLをsetStateする
    await uploadRef
      .getDownloadURL()
      .then(url => {
        setImgURL(url);
      })
      .catch(() => {
        alert('失敗しました');
      });
    console.log(imgURL);
    await firebase.firestore().collection('users').add({
      date: firebase.firestore.FieldValue.serverTimestamp(), // 登録日時
      profileImage: imgURL,
      username: name,
      userid: uid,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>マイページ</Text>
        <View style={styles.borderLine}></View>
      </View>
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
      <Text>{name}</Text>
      <Text>ID:{uid}</Text>
      <EditButton />
      <Button title="sign out" onPress={signout} />
      <Button title="firebaseに保存" onPress={uploadPostImg} />
      <Image style={styles.image} source={{uri: imgURL}} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: '600',
    padding: 15,
  },
  borderLine: {
    borderWidth: 0.5,
    borderColor: 'gray',
    width: '100%',
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
