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
import BottomSheet from 'react-native-bottomsheet-reanimated';

const INITIAL_REGION = {
  latitude: 40.754932,
  longitude: -73.984016,
  latitudeDelta: 1.5,
  longitudeDelta: 1.5,
};

// const Screen = {
//   width: Dimensions.get('window').width,
//   height: Dimensions.get('window').height,
// };
// const snapPoints = [0, Screen.height / 2, '70%', '100%'];

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
      <Button onPress={animateToRegion} title="Animate" />
      <MapView
        ref={mapRef}
        initialRegion={INITIAL_REGION}
        style={{width: 600, height: 900}}>
        <Marker coordinate={{latitude: 52.4, longitude: 18.7}} />
        <Marker coordinate={{latitude: 52.1, longitude: 18.4}} />
        <Marker coordinate={{latitude: 52.6, longitude: 18.3}} />
        <Marker coordinate={{latitude: 51.6, longitude: 18.0}} />
        <Marker coordinate={{latitude: 53.1, longitude: 18.8}} />
        <Marker coordinate={{latitude: 52.9, longitude: 19.4}} />
        <Marker coordinate={{latitude: 52.2, longitude: 21}} />
        <Marker coordinate={{latitude: 52.4, longitude: 21}} />
        <Marker coordinate={{latitude: 51.8, longitude: 20}} />
      </MapView>
      {/*       
      <View style={styles.boxWrapper}>
        <TouchableOpacity onPress={() => openRef.current.snapTo(1)}>
          <View style={styles.box}>
            <Text>2</Text>
          </View>
        </TouchableOpacity>
      </View>
   
      <BottomSheet
        bottomSheerColor="#FFFFFF"
        ref={openRef}
        initialPosition={'50%'}
        snapPoints={snapPoints}
        isBackDrop={true}
        isBackDropDismissByPress={true}
        isRoundBorderWithTipHeader={true}
        // isModal
        // containerStyle={{backgroundColor:"red"}}
        // tipStyle={{backgroundColor:"red"}}
        // headerStyle={{backgroundColor:"red"}}
        // bodyStyle={{backgroundColor:"red",flex:1}}
        header={
          <View>
            <Text style={styles.text}>Header</Text>
          </View>
        }
        body={
          <View style={styles.body}>
            <Text style={styles.text}>Body</Text>
          </View>
        }
      />
       */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
  },
  box: {
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    zIndex: 10,
  },
  boxWrapper: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  body: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default SearchMapScreen;
