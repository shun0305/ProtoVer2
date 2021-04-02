import React, {FC} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';

import OnboardingData from '../../Data/OnboardingData';

const OnboardingScreen: FC = () => {
  return (
    <View style={styles.container}>
      <Text>Onboarding Screen</Text>
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

export default OnboardingScreen;
