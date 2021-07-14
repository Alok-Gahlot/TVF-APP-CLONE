import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {vw, vh, normalize} from '../dimensions/dimension';
import Separator from '../components/Separator';
import Channels from '../searchScreens/Channels';
import {channels} from '../constants/Contants';
import Shows from '../searchScreens/Shows';
import Videos from '../searchScreens/Videos';

export default function Search({navigation}) {
  const [shows, setShows] = React.useState([]);
  const [isLoading, setLoading] = React.useState(true);
  const [videos, setVideos] = React.useState([]);

  const [helper, setHelper] = React.useState(shows);
  const [helperV, setHelperV] = React.useState(videos);
  const [helperC, setHelperC] = React.useState(channels);

  const search = text => {
    setHelper(
      shows.filter(i => i.name.toLowerCase().includes(text.toLowerCase())),
    );
    setHelperV(
      videos.filter(i => i.name.toLowerCase().includes(text.toLowerCase())),
    );
    setHelperC(
      channels.filter(i => i.name.toLowerCase().includes(text.toLowerCase())),
    );
  };
  const str = 'https://image.tmdb.org/t/p/original';
  React.useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/discover/tv?api_key=88fe02d450f4e58ea616b42de9b0d0e7&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate',
    )
      .then(response => response.json())
      .then(json => {
        setShows(json.results);
        setHelper(shows);
      })
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  React.useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/discover/tv?api_key=88fe02d450f4e58ea616b42de9b0d0e7&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate',
    )
      .then(response => response.json())
      .then(json => {
        setVideos(json.results);
        setHelperV(videos);
      })
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.inputView}>
        <TextInput
          style={styles.text}
          placeholder="Search shows, videos, channels"
          selectionColor={'black'}
          onChangeText={text => search(text)}
        />
        <TouchableOpacity style={styles.buttonVoice}>
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require('../assets/voice3.png')}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.main}>
        <Text style={styles.titleText}>CHANNELS</Text>
        <Separator />
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={helperC}
          renderItem={({item}) => {
            return isLoading ? (
              <ActivityIndicator
                animating={true}
                size="large"
                style={{opacity: 1, color: 'red'}}
              />
            ) : (
              <Channels image1={item.image} title={item.name} />
            );
          }}
          keyExtractor={item => item.id}
        />
      </View>
      <View style={styles.main}>
        <Text style={styles.titleText}>SHOWS</Text>
        <Separator />
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={helper}
          renderItem={({item}) => {
            return isLoading ? (
              <ActivityIndicator
                animating={true}
                size="large"
                style={{opacity: 1, color: 'red'}}
              />
            ) : (
              <View style={styles.containershows}>
                <TouchableOpacity
                  style={styles.imageViewshows}
                  onPress={() =>
                    navigation.navigate('MainScreen', {
                      title: item.name,
                      overview: item.overview,
                      image: str.concat(item.backdrop_path),
                      update: helper,
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
            );
          }}
          keyExtractor={item => item.id}
        />
      </View>

      <View style={styles.main}>
        <Text style={styles.titleText}>VIDEOS</Text>
        <Separator />
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={helperV}
          renderItem={({item}) => {
            return isLoading ? (
              <ActivityIndicator
                animating={loading}
                size="large"
                style={{opacity: 1, color: 'red'}}
              />
            ) : (
              <View style={styles.containershows}>
                <TouchableOpacity
                  style={styles.imageViewshows}
                  onPress={() =>
                    navigation.navigate('MainScreen', {
                      title: item.name,
                      overview: item.overview,
                      image: str.concat(item.backdrop_path),
                      update: helperV,
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
            );
          }}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: 'center',
    backgroundColor: 'black',
  },
  text: {
    borderWidth: 1,
    borderColor: 'lightgray',
    width: '100%',
    padding: '3%',
    backgroundColor: 'white',
    borderRadius: 5,
  },
  inputView: {
    width: '95%',
    flexDirection: 'row',
  },
  buttonVoice: {
    position: 'absolute',
    width: vw(50),
    height: vh(50),
    right: vw(-17),
    top: vh(10),
  },
  icon: {
    width: normalize(20),
    height: normalize(20),
  },
  main: {
    width: '100%',
    marginTop: vh(20),
  },
  titleText: {
    color: 'white',
    fontWeight: 'bold',
    marginHorizontal: vw(11),
    marginBottom: vh(3),
  },
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
