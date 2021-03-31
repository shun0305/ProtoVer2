import React, {FC, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialIcons';

import Colors from '../../constants/Color';
import OffProfitButton from '../../components/UI/Buttons/OffProfitButton';
import OffWarnButton from '../../components/UI/Buttons/OffWarnButton';
import ProfitButton from '../../components/UI/Buttons/ProfitButton';
import WarnButton from '../../components/UI/Buttons/WarnButton';

const PostScreen: FC = () => {
  const [info, setInfo] = useState<string | null>(null);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [iconName, setIconName] = useState<string | null>(null);
  const [text, setText] = useState<string | null>(null);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.postButton}>
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
          <TextInput
            style={styles.input}
            placeholder="5th Ave Manhattan"
            placeholderTextColor="gray"
          />
        </View>
      </View>
      <View style={styles.infoArea}>
        <Text style={styles.infoText}>どんなTips?</Text>
        <View style={styles.infoButtonContainer}>
          <TouchableOpacity
            onPress={() => setInfo('profit')}
            style={styles.infoButton}>
            {info === 'profit' ? <ProfitButton /> : <OffProfitButton />}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setInfo('warn')}>
            {info === 'warn' ? <WarnButton /> : <OffWarnButton />}
          </TouchableOpacity>
        </View>
      </View>
      <View></View>
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
    fontSize: 14,
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
