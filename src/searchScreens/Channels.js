import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import {vw, vh, normalize} from '../dimensions/dimension';

export default function Channels({navigation, image1, title}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.imageView}>
        <Image style={styles.image} source={image1} resizeMode="stretch" />
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: normalize(7),
    alignSelf: 'center',
    marginTop: vh(3),
  },
  imageView: {
    width: 60,
    height: 77,
  },
  image: {
    borderRadius: 70,
    width: 60,
    height: 57,
  },
  container: {
    marginHorizontal: vw(10),
  },
});
