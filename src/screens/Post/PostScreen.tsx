import React, {FC, useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Alert,
  StyleSheet,
} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialIcons';
import RNLocation from 'react-native-location';
import Geocoder from 'react-native-geocoding';
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

  const postDataHandler = async () => {
    if (text === '') {
      alert('Please write something');
    } else {
      await firebase.firestore().collection('posts').add({
        text: text,
        info: info,
        iconname: iconName,
        date: firebase.firestore.FieldValue.serverTimestamp(), // 登録日時
        lat: Lat,
        lng: Lng,
        address: address,
        profileImage: photoUrl,
      });
      setText('');
      setIconName('');
      alert('successed subimiting');
      props.navigation.navigate('Search');
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
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
        <CategoryModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          iconName={iconName}
          setIconName={setIconName}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%',
  },
  header: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row',
  },
  postButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primaryColor,
    width: 70,
    height: 30,
    borderRadius: 15,
    marginRight: 15,
  },
  postText: {
    color: 'white',
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
});

export default PostScreen;
