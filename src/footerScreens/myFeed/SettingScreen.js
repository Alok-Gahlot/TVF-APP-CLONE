import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  Modal,
} from 'react-native';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {vh, vw, normalize} from '../../dimensions/dimension';

export default function SettingsScreen({navigation}) {
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
        console.log(json.results);
      })
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  const showRender = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.mainView}
        onPress={() =>
          navigation.navigate('MainScreen', {
            title: item.name,
            overview: item.overview,
            image: str.concat(item.backdrop_path),
            update: data,
          })
        }>
        <View style={styles.internalView}>
          <View style={styles.showImageView}>
            <Image
              style={styles.showImage}
              source={{uri: str.concat(item.poster_path)}}
              resizeMode="stretch"
            />
          </View>
          <View style={styles.textView}>
            <Text style={styles.showTitle}>{item.name}</Text>
            <Text style={styles.pop}>Popularity : {item.popularity}</Text>
            <Text
              numberOfLines={3}
              style={{color: 'white', fontSize: normalize(12)}}>
              {item.overview}
            </Text>
            <Text style={styles.rel}>Released on : {item.first_air_date}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.showScreen}>
      <FlatList
        ListHeaderComponent={() => (
          <Text
            style={{
              color: 'white',
              fontSize: normalize(29),
              fontWeight: 'bold',
              marginBottom: vh(10),
              alignSelf: 'center',
            }}>
            My Feed
          </Text>
        )}
        data={data}
        renderItem={showRender}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  showScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  mainView: {
    width: vw(375),
    height: vh(150),
    borderColor: '#ffc104',
    borderWidth: 1,
    marginVertical: vh(5),
  },
  internalView: {
    width: '100%',
    height: vh(140),
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  showImageView: {
    height: vh(140), //
    width: vw(100),
  },
  showImage: {
    height: vh(140), //
    width: '100%',
  },
  textView: {
    margin: normalize(30),
    width: vw(200),
    textAlign: 'justify',
  },
  showTitle: {
    color: 'white',
    fontWeight: 'bold',
  },
  pop: {
    color: 'white',
    fontSize: normalize(10),
    marginVertical: vh(4),
    fontWeight: 'bold',
  },
  rel: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: normalize(10),
    marginVertical: vh(4),
  },
});
