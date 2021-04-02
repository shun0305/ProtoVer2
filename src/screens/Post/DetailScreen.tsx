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
  username: string;
  content: string;
  place: string[];
  profileImage: string;
  category: string;
  info: string;
  time: string;
}

const DetailScreen: FC<DetailProp> = props => {
  const {
    username,
    content,
    place,
    profileImage,
    category,
    info,
    time,
  } = props.route.params;

  return (
    <View style={styles.container}>
      <View style={styles.userContainer}>
        <View style={styles.userContainerSub}>
          <Image style={styles.image} source={{uri: profileImage}} />
          <View>
            <Text style={styles.username}>{username}</Text>
            <Text style={styles.category}>{category}</Text>
          </View>
        </View>
        <View>
          {info === 'warn' ? <WarnButton /> : <ProfitButton />}
          {/* <Text style={styles.time}>{time}</Text> */}
        </View>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.content}>{content}</Text>
      </View>
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

export default DetailScreen;
