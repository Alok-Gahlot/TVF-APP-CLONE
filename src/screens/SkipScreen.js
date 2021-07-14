import * as React from 'react';
import {
  View,
  Dimensions,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
const Width = Dimensions.get('window').width;
import {vw, vh, normalize} from '../dimensions/dimension';

export default function SkipScreen({navigation}) {
  return (
    <View style={styles.container}>
      <View style={{alignItems: 'flex-start'}}>
        <TouchableOpacity
          style={styles.icon}
          onPress={() => navigation.goBack()}>
          <Image
            style={styles.icnPng}
            resizeMode="center"
            source={require('../assets/arrow.png')}
          />
        </TouchableOpacity>
      </View>
      <Image
        style={styles.image}
        source={require('../assets/skipScreen.jpeg')}
      />
      <View style={styles.footer}>
        <Text style={styles.btnAbove}>To enjoy all of the features,</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Email')}>
          <Text style={styles.buttonText}>SIGN IN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  image: {
    width: vw(375),
    height: vh(560),
    resizeMode: 'stretch',
    marginTop: -vh(173),
  },
  button: {
    width: '85%',
    padding: '3%',
    backgroundColor: '#FFC104',
    alignItems: 'center',
    borderRadius: 70,
    marginVertical: '2%',
    alignSelf: 'center',
  },
  buttonText: {
    fontSize: normalize(15),
    fontWeight: 'bold',
  },
  icon: {
    width: vw(30),

    marginLeft: vw(20),
    height: vh(200),
  },
  icnPng: {
    width: vw(30),
    height: vh(30),
  },
  btnAbove: {color: 'white', alignSelf: 'center', fontSize: normalize(13)},
  footer: {marginTop: -vh(40)},
});
