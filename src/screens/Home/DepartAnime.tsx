import React, {useState, useEffect} from 'react';
import AnimatedSplash from 'react-native-animated-splash-screen';
import AppStack from '../Navigation/AppStack';
import Colors from '../../constants/Color';

const FirstScreen = props => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 1500);
  }, []);
  return (
    <AnimatedSplash
      translucent={true}
      isLoaded={isLoaded}
      logoImage={require('../../images/hagt.png')}
      backgroundColor={'white'}
      logoHeight={550}
      logoWidth={360}>
      <AppStack navigation={props.navigation} />
    </AnimatedSplash>
  );
};

export default FirstScreen;
