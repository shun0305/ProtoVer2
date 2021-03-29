import React, {useRef} from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import BottomSheet from 'react-native-bottomsheet-reanimated';

const Screen = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
};
const snapPoints = [0, Screen.height / 2, '70%', '100%'];

const SearchMapScreen = () => {
  const openRef = useRef<number | null>(null);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.boxWrapper}>
        <TouchableOpacity onPress={() => openRef.current.snapTo(0)}>
          <View style={styles.box}>
            <Text>1</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => openRef.current.snapTo(1)}>
          <View style={styles.box}>
            <Text>2</Text>
          </View>
        </TouchableOpacity>
        {/* <TouchableOpacity onPress={() => onOpenBottomSheetHandler(2)}>
          <View style={styles.box}>
            <Text>3</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onOpenBottomSheetHandler(3)}>
          <View style={styles.box}>
            <Text>4</Text>
          </View>
        </TouchableOpacity> */}
      </View>

      <BottomSheet
        bottomSheerColor="#FFFFFF"
        // backDropColor="red"
        // eslint-disable-next-line react/no-string-refs
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
    </SafeAreaView>
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
