import React, {FC} from 'react';
import {Modal, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialIcons';

import Colors from '../../constants/Color';

const CategoryModal: FC = props => {
  function selectFoodIcon() {
    props.setModalVisible(!props.modalVisible);
    props.setIconName('fastfood');
  }

  function selectCarIcon() {
    props.setModalVisible(!props.modalVisible);
    props.setIconName('directions-car');
  }

  function selectSmokeIcon() {
    props.setModalVisible(!props.modalVisible);
    props.setIconName('smoking-rooms');
  }

  function selectMoneyIcon() {
    props.setModalVisible(!props.modalVisible);
    props.setIconName('attach-money');
  }

  function selectWcIcon() {
    props.setModalVisible(!props.modalVisible);
    props.setIconName('wc');
  }

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={props.modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>カテゴリーを選択</Text>
            <View style={styles.iconContainer}>
              <TouchableOpacity
                onPress={() => selectFoodIcon()}
                style={styles.icon}>
                <Icons name="fastfood" size={35} color="white" />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => selectCarIcon()}
                style={styles.icon}>
                <Icons name="directions-car" size={35} color="white" />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => selectSmokeIcon()}
                style={styles.icon}>
                <Icons name="smoking-rooms" size={35} color="white" />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => selectMoneyIcon()}
                style={styles.icon}>
                <Icons name="attach-money" size={35} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 200,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    width: '97%',
    height: 300,
    padding: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    fontSize: 18,
    fontWeight: '400',
    marginBottom: 15,
    textAlign: 'center',
  },
  icon: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primaryColor,
    borderRadius: 50,
    padding: 5,
    marginHorizontal: 15,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
export default CategoryModal;
