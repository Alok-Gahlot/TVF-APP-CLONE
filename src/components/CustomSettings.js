import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {vh, vw, normalize} from '../dimensions/dimension';

export default function CustomSettings({title, text}) {
  return (
    <View style={styles.mainSection}>
      <Text style={styles.content}>{title}</Text>
      <Text style={styles.caption}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainSection: {
    width: '100%',
    paddingHorizontal: '6%',
    marginBottom: '4%',
  },
  caption: {
    color: 'white',
    fontSize: normalize(12),
  },
  content: {color: 'white', fontSize: normalize(16), marginVertical: vh(4)},
});
