import React, {FC, useState} from 'react';
import {
  View,
  Text,
  Alert,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import CountryPicker from 'react-native-country-picker-modal';
import Icons from 'react-native-vector-icons/MaterialIcons';

import Colors from '../../constants/Color';
import firebase from '../../constants/firebase';

const HomeDepartScreen: FC = props => {
  const [country, setCountry] = useState(null);
  const [visible, setVisible] = useState(false);
  const switchVisible = () => setVisible(!visible);
  var user = firebase.auth().currentUser;
  var name, photoUrl, uid, emailVerified;

  if (user != null) {
    name = user.displayName;
    photoUrl = user.photoURL;
    uid = user.uid;
  }
  const postDataHandler = async () => {
    if (country === null) {
      Alert.alert('行き先を選択してください');
    } else {
      await firebase.firestore().collection('departs').add({
        date: firebase.firestore.FieldValue.serverTimestamp(), // 登録日時
        profileImage: photoUrl,
        username: name,
        uid: uid,
        destination: country.name,
      });
      props.navigation.navigate('departanm');
    }
  };
  console.log(country);
  return (
    <View style={styles.container}>
      <View style={styles.inputScreen}>
        <Text style={styles.explain}>旅行する国を選択してください</Text>
        <View style={styles.inputContainer}>
          <CountryPicker
            onSelect={name => setCountry(name)}
            withFlag={true}
            translation="jpn"
            visible={visible}
            withFlagButton={true}
            containerButtonStyle={{display: 'none'}}
            onClose={() => setVisible(false)}
            onOpen={() => setVisible(true)}
          />
          {country !== null ? (
            <TouchableOpacity
              onPress={switchVisible}
              style={styles.selectContainer}>
              <Icons
                name="keyboard-arrow-down"
                color={Colors.primaryColor}
                size={46}
              />

              <Text style={{fontSize: 30}}>{country.name}</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={switchVisible}
              style={styles.selectContainer}>
              <Icons
                name="keyboard-arrow-down"
                color={Colors.primaryColor}
                size={46}
              />

              <Text style={{fontSize: 30}}>______</Text>
            </TouchableOpacity>
          )}
          {/* <Text style={{fontSize: 25}}>へ行く</Text> */}
        </View>
        <Image
          style={{width: 350, height: 300}}
          source={require('../../images/Exploring-pana.png')}
        />
        <TouchableOpacity style={styles.departButton} onPress={postDataHandler}>
          <Text style={styles.buttonText}>出発する</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  explain: {
    margin: 25,
    fontSize: 20,
    fontWeight: '700',
  },
  inputScreen: {
    alignItems: 'center',
  },
  inputContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  text: {
    fontSize: 17,
    marginBottom: 8,
  },
  input: {
    width: 300,
    height: 45,
    borderWidth: 0.5,
    borderColor: 'gray',
    borderRadius: 5,
  },
  departButton: {
    width: 160,
    height: 40,
    backgroundColor: Colors.primaryColor,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  button: {
    shadowColor: 'gray',
    shadowOpacity: 0.2,
    shadowOffset: {width: 1, height: 2},
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 30,
    backgroundColor: 'white',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '700',
    color: 'white',
  },
  selectContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 20,
  },
});

export default HomeDepartScreen;
