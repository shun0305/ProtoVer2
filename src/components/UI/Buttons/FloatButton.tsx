import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialIcons';

import Colors from '../../../constants/Color';

// const Screen = {
//   width: Dimensions.get('window').width,
//   height: Dimensions.get('window').height,
// };
// const snapPoints = [0, Screen.height / 2, '55%', '100%'];
const FloatButton = ({openRef}) => {
  // const openRef = useRef<number | null>(null);

  return (
    <TouchableOpacity
      style={styles.fab}
      onPress={() => openRef.current.snapTo(2)}>
      <Icons name="edit" color="white" size={26} />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  fab: {
    // position: 'absolute',
    width: 50,
    height: 50,
    backgroundColor: Colors.primaryColor,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    // right: 15,
    // top: 500,
  },
});
export default FloatButton;
