import * as React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {vh, vw, normalize} from '../dimensions/dimension';

export default function RateApp({navigation}) {
  const [liked, setLiked] = React.useState(false);
  const [dislike, setDislike] = React.useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.close}
        onPress={() => navigation.navigate('Play')}>
        <Image
          style={styles.icon1}
          resizeMode="stretch"
          source={require('../assets/rating/close.png')}
        />
      </TouchableOpacity>
      <View style={styles.mainContainer}>
        <Text style={styles.text}>
          How would you best describe your experience of using TVFPLAY ?
        </Text>
        <View style={styles.imageContainer}>
          {liked ? (
            <TouchableOpacity
              onPress={() => setLiked(!liked)}
              style={styles.imageButton}>
              <Image
                style={styles.icon}
                source={require('../assets/rating/love.png')}
                resizeMode="stretch"
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.imageButton}
              onPress={() => {
                setLiked(!liked);
                if (dislike) {
                  setDislike(false);
                }
              }}>
              <Image
                style={styles.icon}
                source={require('../assets/rating/like.png')}
                resizeMode="stretch"
              />
            </TouchableOpacity>
          )}
          {dislike ? (
            <TouchableOpacity
              style={styles.imageButton}
              onPress={() => {
                setDislike(!dislike);
              }}>
              <Image
                style={styles.icon}
                source={require('../assets/rating/crying.png')}
                resizeMode="stretch"
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.imageButton}
              onPress={() => {
                setDislike(!dislike);
                if (liked) {
                  setLiked(false);
                }
              }}>
              <Image
                style={styles.icon}
                source={require('../assets/rating/dislike.png')}
                resizeMode="stretch"
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    flex: 1,
  },
  text: {
    color: 'white',
    fontSize: normalize(20),
    fontWeight: 'bold',
    textAlign: 'justify',
  },
  mainContainer: {width: '95%'},
  imageContainer: {
    flexDirection: 'row',
    marginVertical: vh(30),
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  imageButton: {
    alignSelf: 'center',
    alignItems: 'center',
    width: vw(60),
    height: vh(50),
  },
  close: {
    position: 'absolute',
    top: vh(10),
    left: vw(10),
    width: vw(50),
    height: vh(50),
  },
  icon: {
    width: vw(60),
    height: vh(50),
  },
  icon1: {
    width: vw(50),
    height: vh(40),
  },
});
