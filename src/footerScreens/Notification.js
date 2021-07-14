import * as React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {vh, vw, normalize} from '../dimensions/dimension';

export default function Saved() {
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image
          style={styles.icon}
          source={require('../assets/NotificationImage.jpeg')}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  image: {
    alignItems: 'center',
    backgroundColor: 'red',
  },
  icon: {
    width: vw(250),
    height: vh(150),
  },
});
