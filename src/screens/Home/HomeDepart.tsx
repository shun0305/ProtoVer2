import React, {FC} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import Colors from '../../constants/Color';
import Button from '../../components/UI/Button';

const HomeDepartScreen: FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.explain}>行き先を選択してください</Text>
      <View style={styles.inputScreen}>
        <View style={styles.inputContainer}>
          <Text style={styles.text}>国名</Text>
          {/* 後々APIを使って選択式にする */}
          <TextInput style={styles.input} />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.text}>都市名</Text>
          <TextInput style={styles.input} />
        </View>
        <TouchableOpacity>
          <Button style={styles.departButton}>
            <Text style={styles.buttonText}>出発する</Text>
          </Button>
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
  buttonText: {
    fontSize: 20,
    fontWeight: '700',
    color: 'white',
  },
});

export default HomeDepartScreen;
