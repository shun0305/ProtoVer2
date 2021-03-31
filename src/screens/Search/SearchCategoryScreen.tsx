import React, {FC} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import Colors from '../../constants/Color';
import Button from '../../components/UI/Button';
import WarnButton from '../../components/UI/Buttons/WarnButton';
import ProfitButton from '../../components/UI/Buttons/ProfitButton';

interface DetailProp {
  category: string;
}

const SearchCategoryScreen: FC<DetailProp> = props => {
  const {category} = props.route.params;

  return (
    <View style={styles.container}>
      <Text>{category}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: 15,
  },
  userContainerSub: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 50,
    marginRight: 10,
  },
  username: {
    fontSize: 20,
    marginRight: 30,
  },
  category: {
    fontSize: 18,
    color: 'gray',
  },
  time: {
    color: 'gray',
  },
  contentContainer: {
    marginLeft: 45,
    width: '80%',
  },
  content: {
    fontSize: 18,
  },
});

export default SearchCategoryScreen;
