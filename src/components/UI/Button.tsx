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
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: 'white',
  },
});

export default Card;
