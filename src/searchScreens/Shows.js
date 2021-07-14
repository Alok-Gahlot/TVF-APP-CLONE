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

export default function Shows({navigation, image, title, overview, update}) {
  console.log('Sgowswsw', navigation);
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
    width: vw(120),
    height: vh(124),
  },
  image: {
    borderRadius: 15,
    width: vw(120),
    height: vh(110),
  },
  container: {
    marginHorizontal: vw(10),
  },
});
