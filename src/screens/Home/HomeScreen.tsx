import React, {FC} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

import Colors from '../../constants/Color';

const HomeScreen: FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textTop}>バックパッカーならではの</Text>
      <Text style={styles.textBottom}>経験を共有しよう！</Text>
      <TouchableOpacity style={styles.departButton}>
        <Text style={styles.buttonText}>出発する</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: Colors.primaryColor,
  },
  textTop: {
    fontSize: 20,
    fontWeight: '700',
    paddingTop: '20%',
    paddingBottom: 10,
    color: 'white',
  },
  textBottom: {
    fontSize: 20,
    fontWeight: '700',
    paddingBottom: 10,
    color: 'white',
  },
  departButton: {
    width: 160,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '700',
    color: Colors.primaryColor,
  },
});

export default HomeScreen;
