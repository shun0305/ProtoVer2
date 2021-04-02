import React, {FC} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';

import Colors from '../../constants/Color';
import Button from '../../components/UI/Button';

import {AuthNavigatorParamsList} from '../../types/NavigationTypes';

export interface StartProps {
  navigation: StackNavigationProp<AuthNavigatorParamsList, 'start'>;
}

const StartScreen: FC<StartProps> = props => {
  const {navigation} = props;
  return (
    <View style={styles.screenBack}>
      <View style={styles.screen}>
        <Image
          source={require('../../images/Destination.png')}
          style={styles.image}
        />
        <Text style={styles.title}>サービス名</Text>
      </View>
      <View style={styles.bottomAreaBack}>
        <View style={styles.header}>
          <View style={styles.buttonArea}>
            <TouchableOpacity
              onPress={() => navigation.navigate('signup')}
              style={styles.buttonContainer}>
              <Button style={styles.button}>
                <Text style={styles.buttonText}>新規登録</Text>
              </Button>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('signin')}
              style={styles.buttonContainer}>
              <Button style={styles.button}>
                <Text style={styles.buttonText}>ログイン</Text>
              </Button>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screenBack: {
    flex: 1,
    backgroundColor: 'white',
  },
  screen: {
    borderBottomRightRadius: 100,
    backgroundColor: Colors.primaryColor,
    alignItems: 'center',
    width: '100%',
    height: 550,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 125,
  },
  image: {
    width: 700,
    height: 450,
    opacity: 0.2,
    marginTop: 110,
    position: 'absolute',
  },
  bottomAreaBack: {
    backgroundColor: Colors.primaryColor,
    width: '100%',
    height: '100%',
  },
  header: {
    backgroundColor: 'white',
    borderTopLeftRadius: 100,
    height: 430,
  },
  buttonArea: {
    alignItems: 'center',
    paddingTop: 70,
  },
  buttonContainer: {
    paddingTop: 20,
  },
  button: {
    width: 200,
    height: 45,
    backgroundColor: Colors.primaryColor,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '700',
    color: 'white',
  },
});

export default StartScreen;
