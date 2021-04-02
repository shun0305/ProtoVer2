import React, {FC, useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialIcons';

import firebase from '../../constants/firebase';
import Colors from '../../constants/Color';
import Button from '../../components/UI/Button';
import SearchBar from '../../components/UI/SearchBar';
import WarnButton from '../../components/UI/Buttons/WarnButton';
import ProfitButton from '../../components/UI/Buttons/ProfitButton';

interface DetailProp {
  category: string;
}

const SearchCategoryScreen: FC<DetailProp> = props => {
  const {category} = props.route.params;
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    firebase
      .firestore()
      .collection('posts')
      .where('category', '==', category)
      .onSnapshot(querySnapshot => {
        const posts = [];
        querySnapshot.docs.forEach(doc => {
          const {
            iconname,
            text,
            info,
            address,
            date,
            profileImage,
            username,
          } = doc.data();
          posts.push({
            id: doc.id,
            iconname,
            text,
            info,
            address,
            date,
            profileImage,
            username,
          });
        });
        setPosts(posts);
      });
  }, []);

  console.log(posts);

  return (
    <View style={styles.container}>
      <View style={styles.searchbar}>
        <SearchBar placeholder="地名で検索" />
      </View>
      <FlatList
        data={posts}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() =>
              props.navigation.navigate('detail', {
                username: item.username,
                profileImage: item.profileImage,
                content: item.text,
                place: item.address,
                category: item.iconname,
                info: item.info,
                time: item.date,
              })
            }
            style={styles.listItemContainer}>
            <View style={styles.listUserContainer}>
              {item.profileImage !== null ? (
                <Image style={styles.image} source={{uri: item.profileImage}} />
              ) : (
                <View style={styles.imageNull}>
                  <Icons name="person" color="gray" size={35} />
                </View>
              )}
              <View>
                <Text numberOfLines={1} style={styles.listName}>
                  {item.text}
                </Text>
                <Text style={styles.listPlace}>{item.address}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  searchbar: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
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
  listItemContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    marginHorizontal: 15,
    justifyContent: 'space-between',
  },
  listUserContainer: {
    flexDirection: 'row',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 20,
  },
  imageNull: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 20,
    backgroundColor: Colors.lightGray,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listName: {
    fontSize: 18,
    width: '80%',
  },
  listPlace: {
    fontSize: 16,
    fontWeight: '500',
  },
});

export default SearchCategoryScreen;
