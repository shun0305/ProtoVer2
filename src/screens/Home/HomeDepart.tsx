import React, {FC, useState} from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import CountryPicker from 'react-native-country-picker-modal';

import Colors from '../../constants/Color';

const HomeDepartScreen: FC = () => {
  const [country, setCountry] = useState(null);
  const [visible, setVisible] = useState(false);
  const switchVisible = () => setVisible(!visible);
  return (
    <View style={styles.container}>
      <Text style={styles.explain}>旅行する国を選択してください</Text>
      <View style={styles.inputScreen}>
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
            <TouchableOpacity onPress={switchVisible}>
              <Text style={{fontSize: 30}}>{country.name}</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={switchVisible} style={{borderWidth: 1}}>
              <Text style={{fontSize: 30}}>kuni</Text>
            </TouchableOpacity>
          )}
          <Text style={{fontSize: 25}}>へ行く</Text>
        </View>
        <Image
          style={{width: 150, height: 100}}
          source={require('../../images/Exploring-pana.png')}
        />
        <TouchableOpacity style={styles.departButton}>
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
});

export default HomeDepartScreen;
