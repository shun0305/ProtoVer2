import React, {FC} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  StyleSheet,
} from 'react-native';

import Colors from '../../constants/Color';
import Button from '../../components/UI/Button';
import {users} from '../../Data/UserData';

const HomeScreen: FC = props => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.textTop}>バックパッカーならではの</Text>
        <Text style={styles.textBottom}>経験を共有しよう！</Text>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('depart');
          }}>
          <Button style={styles.departButton}>
            <Text style={styles.buttonText}>出発する</Text>
          </Button>
        </TouchableOpacity>
      </View>

      <View>
        <View>
          <Text style={styles.listTitleText}>現在旅しているユーザー</Text>
        </View>
        {/* firebaseのデータに変更必要あり */}
        <FlatList
          data={users}
          renderItem={({item}) => (
            <TouchableOpacity style={styles.listItemContainer}>
              <View style={styles.listUserContainer}>
                <Image style={styles.image} source={{uri: item.profileImage}} />
                <View>
                  <Text style={styles.listName}>{item.username}</Text>
                  <Text style={styles.listPlace}>
                    {item.place[0]},{item.place[1]}
                  </Text>
                </View>
              </View>
              <TouchableOpacity>
                <Button style={styles.listButton}>
                  <Text style={styles.listButtonText}>GT</Text>
                </Button>
              </TouchableOpacity>
            </TouchableOpacity>
          )}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: Colors.primaryColor,
    height: '26%',
  },
  textTop: {
    fontSize: 20,
    fontWeight: '700',
    paddingTop: '20%',
    paddingBottom: 10,
    color: 'white',
  },
  textBottom: {
    fontSize: 20,
    fontWeight: '700',
    paddingBottom: 10,
    color: 'white',
  },
  departButton: {
    width: 160,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '700',
    color: Colors.primaryColor,
  },
  listTitleText: {
    fontSize: 20,
    fontWeight: '700',
    padding: 25,
  },

  // ここから下はリスト部分,後々FlatListに変更
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
  },
  listPlace: {
    fontSize: 16,
    fontWeight: '500',
  },
  listButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    borderWidth: 0.5,
    borderColor: Colors.primaryColor,
    marginLeft: 15,
  },
  listButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.primaryColor,
  },
});

export default HomeScreen;
