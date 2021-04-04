import React, {FC} from 'react';
import {StyleSheet} from 'react-native';
import MapView, {Marker, Callout} from 'react-native-maps';

const INITIAL_REGION = {
  latitude: 35.603719,
  longitude: 155.194905,
  latitudeDelta: 150.5,
  longitudeDelta: 150.5,
};
const AccountMap: FC = () => {
  return (
    <MapView
      showsUserLocation={true}
      mapType="standard"
      initialRegion={INITIAL_REGION}
      style={styles.map}></MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: 250,
  },
});

export default AccountMap;
