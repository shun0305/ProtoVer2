import React, {FC, useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialIcons';

import firebase from '../../constants/firebase';
import Colors from '../../constants/Color';
import Button from '../../components/UI/Button';
import {categories} from '../../Data/CategoryData';
// import {posts} from '../../Data/PostData';

const SearchListScreen: FC = props => {
  const {navigation} = props;
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    firebase
      .firestore()
      .collection('posts')
      .onSnapshot(querySnapshot => {
        const posts = [];
        querySnapshot.docs.forEach(doc => {
          const {
            iconname,
            text,
            image,
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
            image,
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
  return (
    <View style={styles.container}>
      <Text style={styles.header}>カテゴリーで検索</Text>
      <FlatList
        horizontal={true}
        data={categories}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('category', {
                category: item.category,
              })
            }
            style={{backgroundColor: 'white'}}>
            <Button style={styles.categoryContainer}>
              <Icons name={item.icon} color={Colors.primaryColor} size={35} />
              <Text style={styles.categorytext}>{item.category}</Text>
            </Button>
          </TouchableOpacity>
        )}
      />
      <Text style={styles.header}>最近の投稿</Text>
      <FlatList
        data={posts}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('detail', {
                username: item.username,
                profileImage: item.profileImage,
                content: item.text,
                image: item.image,
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
    paddingLeft: 15,
  },
  header: {
    fontSize: 21,
    fontWeight: '700',
    paddingVertical: 10,
  },
  categoryContainer: {
    width: 70,
    height: 70,
    borderColor: Colors.primaryColor,
    borderWidth: 0.5,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  categorytext: {
    color: Colors.primaryColor,
    fontSize: 15,
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

export default SearchListScreen;
