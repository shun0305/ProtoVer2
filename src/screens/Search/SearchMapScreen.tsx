import React, {useRef} from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  Button,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import MapView from 'react-native-map-clustering';
import {Marker} from 'react-native-maps';
import Icons from 'react-native-vector-icons/MaterialIcons';
import BottomSheet from 'react-native-bottomsheet-reanimated';

import Colors from '../../constants/Color';

const INITIAL_REGION = {
  latitude: 40.754932,
  longitude: -73.984016,
  latitudeDelta: 1.5,
  longitudeDelta: 1.5,
};

const Screen = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
};
const snapPoints = [0, Screen.height / 2, '55%', '100%'];

const SearchMapScreen = () => {
  const mapRef = useRef();
  const openRef = useRef<number | null>(null);
  const animateToRegion = () => {
    let region = {
      latitude: 52.6,
      longitude: 18.3,
      latitudeDelta: 7.5,
      longitudeDelta: 7.5,
    };

    mapRef.current.animateToRegion(region, 2000);
  };
  return (
    <View>
      <Button onPress={animateToRegion} title="move" />
      <Button onPress={() => openRef.current.snapTo(2)} title="modal" />
      <MapView
        ref={mapRef}
        initialRegion={INITIAL_REGION}
        clusterColor={Colors.primaryColor}
        style={{width: 600, height: 900}}>
        <Marker
          coordinate={{latitude: 52.4, longitude: 18.7}}
          pinColor="#D2691E">
          <View style={styles.icon}>
            <Icons name="directions-car" size={24} color="white" />
          </View>
        </Marker>
        <Marker
          coordinate={{latitude: 51.4, longitude: 18.7}}
          pinColor="#D2691E">
          <View style={styles.icon}>
            <Icons name="attach-money" size={24} color="white" />
          </View>
        </Marker>
        <Marker
          coordinate={{latitude: 53.4, longitude: 16.7}}
          pinColor="#D2691E">
          <View style={styles.icon}>
            <Icons name="smoking-rooms" size={24} color="white" />
          </View>
        </Marker>
        <Marker
          coordinate={{latitude: 52.4, longitude: 16.7}}
          pinColor="#D2691E">
          <View style={styles.icon}>
            <Icons name="fastfood" size={24} color="white" />
          </View>
        </Marker>
      </MapView>
      <BottomSheet
        bottomSheerColor="#FFFFFF"
        ref={openRef}
        initialPosition={'55%'}
        snapPoints={snapPoints}
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
  },
  icon: {
    backgroundColor: Colors.primaryColor,
    borderRadius: 30,
    padding: 5,
    marginRight: 10,
    marginLeft: 10,
    width: 35,
  },
  //   ここからはModalのスタイル
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
    borderTopRightRadius: 50,
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

export default SearchMapScreen;
