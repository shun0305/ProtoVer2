import React, {FC, useRef} from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  Button,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialIcons';
import BottomSheet from 'react-native-bottomsheet-reanimated';
import Colors from '../../../constants/Color';

const Screen = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
};
const snapPoints = [0, Screen.height / 1, '35%', '100%'];
const BottomModal: FC = props => {
  const openRef = useRef<number | null>(null);

  return (
    <BottomSheet
      bottomSheerColor="#FFFFFF"
      ref={props.openRef}
      initialPosition={'35%'}
      snapPoints={props.snapPoints}
      isBackDrop={true}
      isBackDropDismissByPress={true}
      isRoundBorderWithTipHeader={true}
      // isModal
      containerStyle={styles.modalContainer}
      //tipStyle={styles.modalTip}
      // headerStyle={{backgroundColor: 'red'}}
      // bodyStyle={{backgroundColor: 'red', flex: 1}}
      header={
        <View style={styles.modalheader}>
          <Text style={styles.modalheaderText}>カテゴリーで探す</Text>
        </View>
      }
      body={
        <View style={styles.modalbody}>
          <TouchableOpacity style={styles.modalCategoryContainer}>
            <View style={styles.modalIcon}>
              <Icons name="fastfood" size={35} color="white" />
            </View>
            <Text>食べ物</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.modalCategoryContainer}>
            <View style={styles.modalIcon}>
              <Icons name="directions-car" size={35} color="white" />
            </View>
            <Text>交通</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.modalCategoryContainer}>
            <View style={styles.modalIcon}>
              <Icons name="smoking-rooms" size={35} color="white" />
            </View>
            <Text>タバコ</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.modalCategoryContainer}>
            <View style={styles.modalIcon}>
              <Icons name="attach-money" size={35} color="white" />
            </View>
            <Text>お金</Text>
          </TouchableOpacity>
        </View>
      }
    />
  );
};

const styles = StyleSheet.create({
  modalheader: {
    alignItems: 'center',
  },
  modalbody: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalheaderText: {
    fontSize: 18,
    fontWeight: '500',
    paddingVertical: 10,
  },
  modalCategoryContainer: {
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: 'white',
    // borderTopRightRadius: 50,
    width: '100%',
  },
  modalIcon: {
    backgroundColor: Colors.primaryColor,
    borderRadius: 30,
    padding: 5,
    marginHorizontal: 15,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default BottomModal;
