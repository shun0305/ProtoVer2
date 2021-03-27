import React, {FC} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

import Colors from '../../constants/Color';
import Button from '../../components/UI/Button';

const StartScreen: FC = props => {
  return (
    <View style={styles.screen}>
      <Image
        source={require('../../images/Destination.png')}
        style={styles.image}
      />
      <Text style={styles.title}>サービス名</Text>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('signup')}
        style={styles.buttonContainer}>
        <Button style={styles.button}>
          <Text style={styles.buttonText}>新規登録</Text>
        </Button>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('signin')}
        style={styles.buttonContainer}>
        <Button style={styles.button}>
          <Text style={styles.buttonText}>ログイン</Text>
        </Button>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.primaryColor,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 125,
    marginBottom: 450,
  },
  image: {
    width: 1000,
    height: 650,
    opacity: 0.2,
    marginTop: 130,
    position: 'absolute',
  },
  buttonContainer: {
    paddingTop: 20,
  },
  button: {
    width: 200,
    height: 45,
    backgroundColor: 'white',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '700',
    color: Colors.accentColor,
  },
});

export default StartScreen;
