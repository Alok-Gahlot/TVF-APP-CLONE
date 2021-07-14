import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import {vh, vw, normalize} from '../dimensions/dimension';

export default function Feedback({navigation}) {
  const [text, setText] = React.useState('');
  return (
    <View style={styles.container}>
      <View style={styles.Header}>
        <TouchableOpacity
          style={styles.arrowView}
          onPress={() => navigation.goBack()}>
          <Image source={require('../assets/arrow.png')} style={styles.icon} />
        </TouchableOpacity>
        <View style={styles.viewProfile}>
          <Text style={styles.headerText}>Feedback</Text>
        </View>
        {text === '' ? (
          <TouchableOpacity
            style={[styles.arrowView, {marginLeft: vw(110)}]}
            onPress={() => {
              alert('Your feedback is successfully submitted');
              navigation.navigate('Play');
            }}
            disabled={text === '' ? true : false}>
            <Image
              source={require('../assets/telegram.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={[styles.arrowView, {marginLeft: vw(110)}]}
            onPress={() => {
              alert('Your feedback is successfully submitted');
              setTimeout(() => {
                navigation.goBack();
              }, 3000);
            }}
            disabled={text === '' ? true : false}>
            <Image
              source={require('../assets/teleEnable.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
        )}
      </View>
      <View>
        <TextInput
          style={styles.textInput}
          onChangeText={text => setText(text)}
          placeholder="Enter Here...."
          placeholderTextColor="#FFC104"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  Header: {
    width: '100%',
    backgroundColor: '#232323',
    flexDirection: 'row',
    alignItems: 'center',
  },
  arrowView: {
    marginTop: vh(12),
    width: vw(20),
    height: vh(10),
    marginLeft: vw(14),
    alignItems: 'center',
    marginBottom: vh(17),
  },
  icon: {
    width: vw(25),
    height: vh(20),
  },
  viewProfile: {
    marginTop: vh(6),
    marginLeft: '30%',
  },
  headerText: {color: 'white', fontSize: normalize(16)},
  textInput: {
    width: '100%',
    color: 'white',
    height: '25%',
    paddingHorizontal: '6%',
    marginTop: '10%',
  },
});
