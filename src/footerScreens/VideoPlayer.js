import Video from 'react-native-video';
import * as React from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  Text,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {vw, vh, normalize} from '../dimensions/dimension';

export default function VideoPlayer({navigation}) {
  const [data, setData] = React.useState([]);
  const [isLoading, setLoading] = React.useState(true);
  const str = 'https://image.tmdb.org/t/p/original';
  React.useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/discover/tv?api_key=88fe02d450f4e58ea616b42de9b0d0e7&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate',
    )
      .then(response => response.json())
      .then(json => {
        setData(json.results);
      })
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }, []);
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item}) => {
          return isLoading ? (
            <ActivityIndicator
              animating={true}
              size="large"
              style={{opacity: 1, color: 'red'}}
            />
          ) : (
            <TouchableOpacity
              style={styles.imageView}
              onPress={() => {
                navigation.navigate('MainScreen', {
                  image: str.concat(item.backdrop_path),
                  title: item.name,
                  overview: item.overview,
                  update: data,
                });
              }}>
              <Image
                style={styles.imageSty}
                source={{uri: str.concat(item.poster_path)}}
                resizeMode="center"
              />
            </TouchableOpacity>
          );
        }}
        ListHeaderComponent={() => {
          return (
            <View>
              <Video
                source={require('../assets/video/video.mp4')}
                autoplay
                style={styles.backgroundVideo}
                repeat
                //controls
                resizeMode="stretch"
                muted
              />
            </View>
          );
        }}
        keyExtractor={item => item.id}
        numColumns={2}
      />
    </View>
  );
}
// Later on in your styles..
const styles = StyleSheet.create({
  backgroundVideo: {
    height: vh(160), // heigh
    width: '100%',
    borderColor: 'white',
    marginVertical: vh(15),
  },
  button: {
    position: 'absolute',
    height: vh(30),
    width: vw(30),
    left: vw(300),
    top: vh(10),
  },
  muteIcon: {
    width: vw(20),
    height: vh(30),
  },
  imageView: {
    width: '50%',
    alignItems: 'center',
    height: vh(180),
    marginVertical: vh(2),
    marginHorizontal: vh(-3),
  },
  imageSty: {
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});
