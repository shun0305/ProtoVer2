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

import Colors from '../../constants/Color';
import firebase from '../../constants/firebase';
import EditButton from '../../components/UI/Buttons/EditButton';
import AccountMap from './AccountMap';

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
        <TouchableOpacity
          style={styles.editButton}
          onPress={() => props.navigation.navigate('accountedit')}>
          <EditButton />
        </TouchableOpacity>
      </View>

      <View style={styles.userContainer}>
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
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.imageNull}
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
            <Icons name="person" color="gray" size={50} />
            <Text style={{fontSize: 10, color: 'gray'}}>画像変更</Text>
          </TouchableOpacity>
        )}
        <View>
          <Text style={styles.username}>{name}</Text>
          <Text style={styles.userid}>ID:{uid}</Text>
        </View>
      </View>
      <AccountMap />
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
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    flexDirection: 'row',
  },
  headerText: {
    fontSize: 24,
    fontWeight: '600',
    paddingTop: 15,
    paddingLeft: '35%',
  },
  editButton: {
    alignItems: 'flex-end',
    paddingRight: 20,
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 50,
    margin: 10,
  },
  imageNull: {
    width: 70,
    height: 70,
    borderRadius: 50,
    backgroundColor: Colors.lightGray,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  username: {
    fontSize: 22,
    fontWeight: '400',
    paddingBottom: 5,
  },
  userid: {
    fontSize: 12,
    color: 'gray',
  },
});

export default AccountScreen;
