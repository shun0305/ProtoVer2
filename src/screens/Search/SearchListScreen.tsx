import React, {FC, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialIcons';

import Colors from '../../constants/Color';
import Button from '../../components/UI/Button';
import {categories} from '../../Data/CategoryData';
import {posts} from '../../Data/PostData';

const SearchListScreen: FC = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>カテゴリーで検索</Text>
      <FlatList
        horizontal={true}
        data={categories}
        renderItem={({item}) => (
          <TouchableOpacity style={{backgroundColor: 'white'}}>
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
              props.navigation.navigate('detail', {
                username: item.username,
                profileImage: item.profileImage,
                content: item.content,
                place: item.place,
                category: item.category,
                info: item.info,
                time: item.time,
              })
            }
            style={styles.listItemContainer}>
            <View style={styles.listUserContainer}>
              <Image style={styles.image} source={{uri: item.profileImage}} />
              <View>
                <Text numberOfLines={1} style={styles.listName}>
                  {item.content}
                </Text>
                <Text style={styles.listPlace}>
                  {item.place[0]},{item.place[1]}
                </Text>
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
