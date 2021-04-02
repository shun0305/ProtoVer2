import React, {FC} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  ImageProps,
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import LinearGradient from 'react-native-linear-gradient';

import OnboardingData from '../../Data/OnboardingData';
import Colors from '../../constants/Color';

type OnbordingProps = {
  item: {id: string; title: string; image: string; description: string};
};

const Onboarding: FC<OnbordingProps> = props => {
  const renderItem = ({item}: OnbordingProps) => {
    return (
      <View style={styles.slide}>
        <View>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
        <Image source={item.image} style={styles.image} />
      </View>
    );
  };

  const keyExtractor = (item: {title: string}) => item.title;

  const renderNextButton = () => {
    return (
      <View style={styles.rightTextWrapper}>
        <Text style={styles.rightText}>次へ</Text>
      </View>
    );
  };

  const renderDoneButton = () => {
    return (
      <LinearGradient
        colors={[Colors.primaryColor, Colors.accentColor]}
        start={{x: 0, y: 0.5}}
        end={{x: 1, y: 0.5}}
        style={styles.doneButtonWrapper}>
        <Text style={styles.doneButtonText}>始める</Text>
      </LinearGradient>
    );
  };

  const renderPrevButton = () => {
    return (
      <View style={styles.leftTextWrapper}>
        <Text style={styles.leftText}>戻る</Text>
      </View>
    );
  };

  const handleDone = () => {
    props.navigation.navigate('start');
  };

  return (
    <View style={{flex: 1}}>
      <StatusBar translucent backgroundColor="transparent" />
      <AppIntroSlider
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        data={OnboardingData}
        dotStyle={styles.dotStyle}
        activeDotStyle={styles.activeDotStyle}
        renderDoneButton={renderDoneButton}
        renderNextButton={renderNextButton}
        renderPrevButton={renderPrevButton}
        showPrevButton
        onDone={handleDone}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  image: {
    marginVertical: 60,
    width: '90%',
    height: 300,
  },
  title: {
    fontSize: 38,
    fontWeight: '700',
    color: Colors.primaryColor,
    textAlign: 'center',
    marginHorizontal: 30,
  },
  description: {
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
    marginHorizontal: 60,
    marginTop: 20,
  },
  dotStyle: {
    backgroundColor: '#D3D3D3',
    width: 30,
    marginBottom: 150,
  },
  activeDotStyle: {
    backgroundColor: Colors.primaryColor,
    width: 30,
    marginBottom: 150,
  },
  rightTextWrapper: {
    width: 40,
    height: 40,
    marginRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  rightText: {
    fontSize: 16,
  },
  leftTextWrapper: {
    width: 40,
    height: 40,
    marginLeft: 20,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  leftText: {
    fontSize: 16,
  },
  doneButtonWrapper: {
    flex: 1,
    paddingLeft: 35,
    paddingRight: 50,
    paddingVertical: 10,
    borderRadius: 25,
    marginRight: -40,
    height: 40,
    justifyContent: 'center',
  },
  doneButtonText: {
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
    color: 'white',
  },
});

export default Onboarding;
