import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import Video from 'react-native-video';
import Shows from '../searchScreens/Shows';
import {vh, vw, normalize} from '../dimensions/dimension';
export default function MainScreen({navigation, route}) {
  const {title, overview, image, update} = route.params;
  console.log('drfytghuihugfcghhgh', update);
  const str = 'https://image.tmdb.org/t/p/original';
  return (
    <View style={styles.container}>
      <View style={styles.imageView}>
        <Image
          resizeMode="stretch"
          style={{width: '100%', height: '100%'}}
          source={{uri: image}}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate('VideoPlayed')}
          style={styles.clickHere}>
          <Text style={styles.play}>Play</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.goBack()}>
          <Image source={require('../assets/arrow.png')} style={styles.icon} />
        </TouchableOpacity>
      </View>
      <View style={styles.main}>
        <Text style={styles.maintitle} onPress={() => navigation.goBack()}>
          {title}
        </Text>
        <View style={{flexDirection: 'row', marginBottom: vh(10)}}>
          <Text style={styles.overview} onPress={() => navigation.goBack()}>
            Overview : <Text style={styles.overviewText}> {overview}</Text>
          </Text>
        </View>

        <View>
          <Text style={styles.heading}> More Like This </Text>

          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={update}
            renderItem={({item}) => (
              <View style={styles.containershows}>
                <TouchableOpacity
                  style={styles.imageViewshows}
                  onPress={() =>
                    navigation.navigate('MainScreen', {
                      title: item.name,
                      overview: item.overview,
                      image: str.concat(item.backdrop_path),
                      data: update,
                    })
                  }>
                  <Image
                    style={styles.imageshows}
                    source={{uri: str.concat(item.poster_path)}}
                    resizeMode="stretch"
                  />
                  <Text style={styles.textshows}>{item.name}</Text>
                </TouchableOpacity>
              </View>
            )}
            keyExtractor={item => item.id + Math.random()}
          />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  backgroundVideo: {
    height: vh(160), // heigh
    width: '100%',
    borderColor: 'white',
    marginVertical: vh(15),
  },
  imageView: {
    width: '100%',
    height: vh(160),
    marginBottom: vh(20),
  },
  clickHere: {
    backgroundColor: '#ffc104',
    position: 'absolute',
    height: vh(30),
    width: vw(90),
    right: 0,
    top: vh(100),
    borderBottomLeftRadius: 50,
    borderTopLeftRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  play: {
    fontSize: normalize(17),
    fontWeight: 'bold',
  },
  main: {
    width: vw(350),
    alignSelf: 'center',
  },
  maintitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: normalize(20),
    marginBottom: vh(10),
  },
  overview: {
    color: '#FFC104',
    fontSize: normalize(15),
    fontWeight: 'bold',
  },
  overviewText: {color: 'white', fontSize: normalize(13)},

  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: normalize(15),
    alignSelf: 'center',
    marginHorizontal: vw(40),
  },

  heading: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: normalize(18),
    marginVertical: vh(20),
  },
  textFlat: {
    color: 'white',
    fontSize: normalize(10),
    alignSelf: 'center',
    marginTop: vh(3),
  },
  imageViewFlat: {
    width: vw(120),
    height: vh(124),
  },
  imageFlat: {
    borderRadius: 15,
    width: vw(120),
    height: vh(110),
  },
  containerFlat: {
    marginHorizontal: vw(10),
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
  textshows: {
    color: 'white',
    fontSize: normalize(10),
    alignSelf: 'center',
    marginTop: vh(3),
  },
  imageViewshows: {
    width: vw(120),
    height: vh(124),
  },
  imageshows: {
    borderRadius: 15,
    width: vw(120),
    height: vh(110),
  },
  containershows: {
    marginHorizontal: vw(10),
  },
});
