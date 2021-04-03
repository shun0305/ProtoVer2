import React, {useRef, useEffect, useState} from 'react';
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
import firebase from '../../constants/firebase';

import Colors from '../../constants/Color';
import ButtomModal from '../../components/UI/Modal/BottomModal';

const INITIAL_REGION = {
  latitude: 37.77493,
  longitude: -122.4194166,
  latitudeDelta: 1.5,
  longitudeDelta: 1.5,
};

const Screen = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
};
const snapPoints = [0, Screen.height / 2, '55%', '100%'];

const SearchMapScreen = props => {
  const mapRef = useRef();
  const openRef = useRef<number | null>(null);
  const animateToRegion = () => {
    let region = {
      latitude: 37.77493,
      longitude: -122.419416,
      latitudeDelta: 7.5,
      longitudeDelta: 7.5,
    };
    mapRef.current.animateToRegion(region, 2000);
  };

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    firebase
      .firestore()
      .collection('posts')
      .onSnapshot(querySnapshot => {
        const posts = [];
        querySnapshot.docs.forEach(doc => {
          const {
            iconname,
            text,
            info,
            address,
            date,
            profileImage,
            username,
            lat,
            lng,
          } = doc.data();
          posts.push({
            id: doc.id,
            iconname,
            text,
            info,
            address,
            date,
            profileImage,
            username,
            lat,
            lng,
          });
        });
        setPosts(posts);
      });
  }, []);

  return (
    <View>
      <Button onPress={animateToRegion} title="move" />
      <Button onPress={() => openRef.current.snapTo(2)} title="modal" />
      <MapView
        ref={mapRef}
        initialRegion={INITIAL_REGION}
        clusterColor={Colors.primaryColor}
        style={{width: 600, height: 900}}>
        {posts.map(item => {
          return (
            <Marker
              key={item.id}
              coordinate={{latitude: item.lat, longitude: item.lng}}
              pinColor="#D2691E">
              <View style={styles.icon}>
                <Icons name={item.iconname} size={24} color="white" />
              </View>
            </Marker>
          );
        })}
      </MapView>
      <ButtomModal snapPoints={snapPoints} openRef={openRef} />
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
  plainView: {
    width: 100,
  },
});

export default SearchMapScreen;
