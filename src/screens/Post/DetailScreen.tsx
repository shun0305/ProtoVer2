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

const DetailScreen: FC = props => {
  const {content, place} = props.route.params;

  return (
    <View style={styles.container}>
      <Text>{content}</Text>
      <Text>{place}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default DetailScreen;
