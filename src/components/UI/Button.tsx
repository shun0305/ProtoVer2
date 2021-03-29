import React, {FC, ReactNode} from 'react';
import {View, StyleSheet} from 'react-native';

type ButtonProps = {
  style: any;
  children: ReactNode;
};

const Card: FC<ButtonProps> = props => {
  const {style, children} = props;
  return <View style={{...styles.button, ...style}}>{children}</View>;
};

const styles = StyleSheet.create({
  button: {
    shadowColor: 'gray',
    shadowOpacity: 0.2,
    shadowOffset: {width: 1, height: 2},
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 30,
    backgroundColor: 'white',
  },
});

export default Card;
