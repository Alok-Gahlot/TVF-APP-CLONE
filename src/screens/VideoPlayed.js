import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  RefreshControl,
  Image,
  TouchableOpacity,
} from 'react-native';
import Video from 'react-native-video';
import {vh, vw, normalize} from '../dimensions/dimension';

export default function VideoPlayed({navigation}) {
  return (
    <View style={styles.container}>
      <View></View>
      <Video
        source={require('../assets/video/video.mp4')}
        style={styles.backgroundVideo}
        repeat
        controls
        resizeMode="stretch"
        fullscreen={true}
        pictureInPicture
        playInBackground
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}>
        <Image source={require('../assets/arrow.png')} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'black',
    justifyContent: 'center',
  },
  backgroundVideo: {
    width: '100%',
    height: vh(337.5),

    borderColor: 'white',
  },
  button: {
    position: 'absolute',
    top: vh(10),
    width: vw(20),
    height: vh(10),
    left: vw(10),
    alignItems: 'center',
    marginBottom: vh(17),
  },
  icon: {width: vw(25), height: vh(20)},
});
