import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text, Image} from 'react-native';
import {vw, vh, normalize} from '../dimensions/dimension';

const Tab = ({color, tab, onPress, icon}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image />
      <Text style={[{color}, styles.text]}>{tab.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
  text: {
    fontSize: normalize(10),
  },
});

export default Tab;
