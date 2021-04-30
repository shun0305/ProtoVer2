import React, {FC, useState, useRef} from 'react';
import {View, Dimensions, StyleSheet} from 'react-native';

import {StackNavigationProp} from '@react-navigation/stack';
import {AppNavigatorParamsList} from '../../types/NavigationTypes';

import SearchBar from '../../components/UI/SearchBar';
import Switch from '../../components/UI/Switch';
import SearchListScreen from './SearchListScreen';
import SearchMapScreen from './SearchMapScreen';
import FloatButton from '../../components/UI/Buttons/FloatButton';
import PostModal from '../../components/UI/Modal/PostModal';
import BottomModal from '../../components/UI/Modal/BottomModal';
import CategoryButton from '../../components/UI/Buttons/CategoryButton';

export interface SearchProps {
  navigation: StackNavigationProp<AppNavigatorParamsList, 'home'>;
}
const Screen = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
};
const snapPoints = [0, Screen.height / 1, '100%', '100%'];
const snapPointsC = [0, Screen.height / 1, '45%', '100%'];

const SearchScreen: FC<SearchProps> = props => {
  const openRef = useRef<number | null>(null);
  const openRefC = useRef<number | null>(null);

  const {navigation} = props;
  const [view, selectView] = useState<string>('list');

  return (
    <View style={styles.screen}>
      {view === 'list' ? (
        <View style={styles.container}>
          <View style={styles.barAndButton}>
            <SearchBar placeholder="地名で検索" />
            <Switch selectView={selectView} />
          </View>
          <SearchListScreen navigation={navigation} />
        </View>
      ) : (
        <View style={styles.container}>
          <View style={styles.barAndButton}>
            <SearchBar placeholder="地名で検索" />
            <Switch selectView={selectView} />
            <SearchMapScreen />
            <View style={styles.lab}>
              <CategoryButton openRef={openRefC} />
            </View>
            <BottomModal snapPoints={snapPointsC} openRef={openRefC} />
          </View>
        </View>
      )}
      <View style={styles.fab}>
        <FloatButton openRef={openRef} />
      </View>
      <PostModal snapPoints={snapPoints} openRef={openRef} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: 'white',
    height: Screen.height / 1,
  },
  container: {
    backgroundColor: 'white',
    paddingTop: 50,
  },
  barAndButton: {
    alignItems: 'center',
    paddingBottom: 5,
  },
  fab: {
    position: 'absolute',
    right: 15,
    top: 699,
  },
  lab: {
    position: 'absolute',
    left: 15,
    top: 120,
  },
});

export default SearchScreen;
