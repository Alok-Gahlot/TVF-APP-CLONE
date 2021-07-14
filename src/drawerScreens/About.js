import * as React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {vh, vw, normalize} from '../dimensions/dimension';
export default function About({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.Header}>
        <TouchableOpacity
          style={styles.arrowView}
          onPress={() => navigation.goBack()}>
          <Image source={require('../assets/arrow.png')} style={styles.icon} />
        </TouchableOpacity>
        <View style={styles.viewProfile}>
          <Text style={styles.headerText}>About TVF</Text>
        </View>
      </View>
      <View style={styles.textView}>
        <Text style={styles.text}>
          TVFPlay is a premium content destination from The Viral Fever (TVF).{' '}
          {'\n'}
          {'\n'} It caters to all those who want to have a premium content
          experience, but cannot find anything worth watching in the traditional
          channels.{'\n'}
          {'\n'} It hosts all of TVF’s premium shows as well as shows and
          content from around the world which TVF believes its audience will
          enjoy watching.{'\n'}
          {'\n'} On TVFPlay, you can browse and watch regular shows and content,
          created and curated especially for the young audience, across variety
          of genres like Humor, Drama, Trends etc.
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  textView: {
    paddingHorizontal: '8%',
    paddingVertical: '8%',
  },
  text: {
    color: 'white',
    textAlign: 'justify',
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
});
