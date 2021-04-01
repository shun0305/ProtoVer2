import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {FIREBASE_API_KEY} from '@env';
const MessageScreen: FC = () => {
  return (
    <View style={styles.container}>
      <Text>{FIREBASE_API_KEY}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MessageScreen;
