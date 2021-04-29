import React, {useState, useEffect} from 'react';
import AnimatedSplash from 'react-native-animated-splash-screen';
import OnboardingScreen from './OnboardingScreen';
import Colors from '../../constants/Color';

const FirstScreen = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 2000);
  }, []);
  return (
    <AnimatedSplash
      translucent={true}
      isLoaded={isLoaded}
      logoImage={require('../../images/Topp.png')}
      backgroundColor={Colors.primaryColor}
      logoHeight={350}
      logoWidth={250}>
      <OnboardingScreen />
    </AnimatedSplash>
  );
};

export default FirstScreen;
