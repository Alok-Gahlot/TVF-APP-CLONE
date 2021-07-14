import * as React from 'react';
import {View, Text, StyleSheet, Image, Animated} from 'react-native';
import {vh, vw, normalize} from '../dimensions/dimension';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function App({navigation}) {
  const [isFirstLaunch, setIsFirstLaunch] = React.useState(null);

  React.useEffect(() => {
    AsyncStorage.getItem('isFirstLaunch').then(value => {
      if (value == null) {
        AsyncStorage.setItem('isFirstLaunch', 'true');
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    });
  }, []);

  const [bool, setBool] = React.useState(false);

  //console.log('async', AsyncStorage.getItem('playScreen'));
  let val = '';
  if (isFirstLaunch) val = 'Onboarding';
  else if (
    AsyncStorage.getItem('emailScreen').then(value => {
      if (value == 'true') {
        setBool(true);
      }
    })
  )
    bool ? (val = 'Email') : (val = 'Onboarding');

  setTimeout(() => {
    navigation.navigate(val);
  }, 3000);
  const position = new Animated.Value(0);
  Animated.spring(position, {
    toValue: -40, //
    duration: 500,
    useNativeDriver: true,
    bounciness: 25,
  }).start();

  const opacityAnimationValue = new Animated.Value(0);

  Animated.stagger(position, [
    Animated.timing(opacityAnimationValue, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }),
  ]).start();

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          {
            transform: [{translateX: position}],
          },
          styles.styleView,
        ]}>
        <Image
          style={styles.TVF_SPLASH_ICON}
          source={require('../assets/TVF_SPLASH.png')}
        />
      </Animated.View>
      <Animated.View
        style={[
          {
            opacity: opacityAnimationValue,
          },
          styles.styleView,
        ]}>
        <Image
          style={styles.splashPlay}
          source={require('../assets/splashPlay.jpeg')}
        />
      </Animated.View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    flexDirection: 'row',
  },
  TVF_SPLASH_ICON: {
    width: '80%',
    height: '50%',
  },
  splashPlay: {
    width: '100%',
    height: '75%',
    marginTop: vh(-5),
  },
  styleView: {
    height: vh(100),
    width: vw(120),
    marginHorizontal: normalize(-30),
  },
});
