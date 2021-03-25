import React, {FC, ReactNode} from 'react';
import {View, Text, StyleSheet} from 'react-native';

type ChildProp = {
  number: number;
  children: ReactNode;
};

const Child: FC<ChildProp> = props => {
  const message: string = 'sdjsiodjidsj';
  const {number, children} = props;
  return (
    <View style={styles.container}>
      <Text>
        {number}no{children}
      </Text>
      <Text>{message}</Text>
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

export default Child;
