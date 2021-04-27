import React, {FC, useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Alert,
  Image,
  StyleSheet,
} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialIcons';
import RNLocation from 'react-native-location';
import Geocoder from 'react-native-geocoding';
import ImagePicker from 'react-native-image-crop-picker';
import {PostProps} from '../../types/DataTypes';

import firebase from '../../constants/firebase';
import {GEOCODING_API} from '@env';
import Colors from '../../constants/Color';
import OffProfitButton from '../../components/UI/Buttons/OffProfitButton';
import OffWarnButton from '../../components/UI/Buttons/OffWarnButton';
import ProfitButton from '../../components/UI/Buttons/ProfitButton';
import WarnButton from '../../components/UI/Buttons/WarnButton';
import InputView from './InputView';
import CategoryModal from '../../components/UI/Modal/CategoryModal';

const PostScreen: FC<PostProps> = props => {
  const [info, setInfo] = useState<string | null>(null);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [iconName, setIconName] = useState<string>('');
  const [text, setText] = useState<string | null>(null);
  // const [geolocation, setGeolocation] = useState<object | null>(null);
  const [Lat, setLat] = useState();
  const [Lng, setLng] = useState();

  const [street, setStreet] = useState();
  const [city, setCity] = useState();

  const [img, setImg] = useState(null);
  const [imgURL, setImgURL] = useState(null);

  function setWarn() {
    setInfo('warn');
    setModalVisible(true);
  }

  function setProfit() {
    setInfo('profit');
    setModalVisible(true);
  }

  var user = firebase.auth().currentUser;
  var name, email, photoUrl, uid, emailVerified;

  if (user != null) {
    name = user.displayName;
    email = user.email;
    photoUrl = user.photoURL;
    emailVerified = user.emailVerified;
    uid = user.uid;
  }

  useEffect(() => {
    (async () => {
      let permission = await RNLocation.requestPermission({
        ios: 'whenInUse',
        android: {
          detail: 'coarse',
          rationale: {
            title: 'We need to access your location',
            message: 'We use your location to show where you are on the map',
            buttonPositive: 'OK',
            buttonNegative: 'Cancel',
          },
        },
      });
      let location;
      if (!permission) {
        permission = await RNLocation.requestPermission({
          ios: 'whenInUse',
          android: {
            detail: 'coarse',
            rationale: {
              title: 'We need to access your location',
              message: 'We use your location to show where you are on the map',
              buttonPositive: 'OK',
              buttonNegative: 'Cancel',
            },
          },
        });
        location = await RNLocation.getLatestLocation({timeout: 100});
      } else {
        location = await RNLocation.getLatestLocation({timeout: 100});
        // setGeolocation(location);
        setLat(location.latitude);
        setLng(location.longitude);
      }
      // console.log(permission);
    })();
  }, []);

  Geocoder.init(GEOCODING_API, {language: 'ja'});
  Geocoder.from(Lat, Lng)
    .then(json => {
      var streetName = json.results[0].address_components[2].short_name;
      var cityName = json.results[0].address_components[5].short_name;
      setStreet(streetName);
      setCity(cityName);
    })
    .catch(error => console.warn(error));
  const address = street + ' ' + city;

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
  };

  const postDataHandler = async () => {
    if (text === '') {
      alert('Please write something');
    } else {
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
      await firebase.firestore().collection('posts').add({
        text: text,
        info: info,
        iconname: iconName,
        date: firebase.firestore.FieldValue.serverTimestamp(), // 登録日時
        lat: Lat,
        lng: Lng,
        address: address,
        image: imgURL,
        profileImage: photoUrl,
        username: name,
      });
      setText('');
      setIconName('');
      setImg('');
      alert('successed subimiting');
      props.navigation.navigate('Search');
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.cancelButton} onPress={postDataHandler}>
          <Text style={styles.cancelText}>キャンセル</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.postButton} onPress={postDataHandler}>
          <Text style={styles.postText}>共有する</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.inputArea}>
        <View style={styles.inputContainer}>
          <Icons
            name="location-on"
            color="gray"
            size={24}
            style={styles.inputIcon}
          />
          {address !== null ? (
            <Text>{address}</Text>
          ) : (
            <Text>現在地取得中</Text>
          )}
        </View>
      </View>
      <View style={styles.infoArea}>
        <Text style={styles.infoText}>どんなTips?</Text>
        <View style={styles.infoButtonContainer}>
          <TouchableOpacity
            onPress={() => setProfit()}
            style={styles.infoButton}>
            {info === 'profit' ? <ProfitButton /> : <OffProfitButton />}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setWarn()}>
            {info === 'warn' ? <WarnButton /> : <OffWarnButton />}
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <InputView
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          iconName={iconName}
          setText={setText}
          text={text}
          value={text}
        />
        {img && (
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={{uri: img.path}} />
          </View>
        )}
        <TouchableOpacity
          style={styles.imageButton}
          onPress={() =>
            ImagePicker.openPicker({
              width: 1000,
              height: 1000,
              cropping: true,
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
        </TouchableOpacity>

        <CategoryModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          iconName={iconName}
          setIconName={setIconName}
        />
      </View>
      {/* ここから画像エリア */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%',
  },
  header: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  postButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primaryColor,
    width: 70,
    height: 35,
    borderRadius: 20,
    marginRight: 15,
  },
  postText: {
    color: 'white',
    fontWeight: '700',
  },
  cancelButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    width: 80,
    height: 35,
    borderRadius: 20,
    borderColor: Colors.primaryColor,
    borderWidth: 0.5,
    marginLeft: 15,
  },
  cancelText: {
    color: Colors.primaryColor,
    fontWeight: '700',
  },
  inputArea: {
    alignItems: 'center',
    marginVertical: 15,
  },
  inputContainer: {
    width: '70%',
    height: 40,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: 'gray',
    alignItems: 'center',
    flexDirection: 'row',
  },
  inputIcon: {
    paddingHorizontal: 5,
  },
  input: {
    fontSize: 16,
  },
  infoArea: {
    marginVertical: 10,
    marginLeft: 25,
  },
  infoText: {
    color: 'gray',
    fontSize: 16,
  },
  infoButtonContainer: {
    flexDirection: 'row',
    padding: 5,
  },
  infoButton: {
    paddingRight: 10,
  },
  imageButton: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 20,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  image: {
    width: '75%',
    height: 180,
    borderRadius: 15,
  },
});

export default PostScreen;
