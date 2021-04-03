import React, {FC} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import Icons from 'react-native-vector-icons/MaterialIcons';

const AccountImage: FC = props => {
  return (
    <View style={styles.container}>
      {img !== null ? (
        <TouchableOpacity style={styles.imageButton} onPress={() => {}}>
          <Image style={styles.image} source={{uri: img.path}} />
          <Text>画像変更</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.imageButton} onPress={() => {}}>
          <Icons
            name="add-photo-alternate"
            color="gray"
            size={35}
            style={styles.inputIcon}
          />
          <Text>画像変更</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: '600',
    padding: 15,
  },
  borderLine: {
    borderWidth: 0.5,
    borderColor: 'gray',
    width: '100%',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  imageNull: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: 'red',
  },
});

export default AccountImage;
