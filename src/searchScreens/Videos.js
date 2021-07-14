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

export default function Shows({navigation, image, title}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.imageView}>
        <Image
          style={styles.image}
          source={{uri: image}}
          resizeMode="stretch"
        />
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: normalize(10),
    alignSelf: 'center',
    marginTop: vh(3),
  },
  imageView: {
    width: vw(150),
    height: vh(100),
  },
  image: {
    borderRadius: 15,
    width: vw(140),
    height: vh(90),
  },
  container: {
    marginHorizontal: vw(10),
  },
});
