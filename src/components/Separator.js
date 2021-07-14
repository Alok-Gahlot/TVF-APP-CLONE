import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import {vh} from '../dimensions/dimension';

export default function Separator() {
  return <View style={styles.separator} />;
}
const styles = StyleSheet.create({
  separator: {height: vh(2), backgroundColor: '#232323', marginBottom: '5%'},
});
