import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {vh, vw, normalize} from '../dimensions/dimension';
import {useSelector, useDispatch} from 'react-redux';
import {likedDelete, watchlistDelete, downloadsDelete} from '../redux/actions';

export default function Saved({navigation}) {
  let data = useSelector(state => {
    return state;
  });

  const dispatch = useDispatch();

  const str = 'https://image.tmdb.org/t/p/original';

  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <Text style={styles.headerText}>Saved</Text>
      </View>
      <View style={styles.main}>
        {data.liked.liked.length == 0 ? (
          <View>
            <View style={styles.Header}>
              <Text style={styles.heading}>My Likes</Text>
            </View>
            <View style={styles.emptyContainer}>
              <Image source={require('../assets/icons/likeDisabled.png')} />
              <Text style={styles.title}>No videos have been liked</Text>
            </View>
          </View>
        ) : (
          <View>
            <View style={styles.Header}>
              <Text style={styles.heading}> My Likes </Text>
            </View>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={data.liked.liked}
              renderItem={({item, index}) => (
                <View style={styles.containerItem}>
                  <TouchableOpacity
                    style={styles.trash}
                    onPress={() => dispatch(likedDelete(index))}>
                    <Image
                      resizeMode="contain"
                      source={require('../assets/icons/trash.png')}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.imageViewItem}
                    onPress={() =>
                      navigation.navigate('MainScreen', {
                        title: item.name,
                        overview: item.overview,
                        image: str.concat(item.backdrop_path),
                        update: data.liked.liked,
                      })
                    }>
                    <Image
                      style={styles.imageItem}
                      source={{uri: str.concat(item.poster_path)}}
                      resizeMode="stretch"
                    />
                    <Text style={styles.textItem}>{item.name}</Text>
                  </TouchableOpacity>
                </View>
              )}
              keyExtractor={item => item.id + Math.random()}
            />
          </View>
        )}
      </View>
      <View style={styles.main}>
        {data.downloads.downloads.length == 0 ? (
          <View>
            <View style={styles.Header}>
              <Text style={styles.heading}>My Downloads</Text>
            </View>
            <View style={styles.emptyContainer}>
              <Image source={require('../assets/icons/downDisabled.png')} />
              <Text style={styles.title}>No videos have been downloaded</Text>
            </View>
          </View>
        ) : (
          <View>
            <View style={styles.Header}>
              <Text style={styles.heading}> My Downloads </Text>
            </View>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={data.downloads.downloads}
              renderItem={({item, index}) => (
                <View style={styles.containerItem}>
                  <TouchableOpacity
                    style={styles.trash}
                    onPress={() => dispatch(downloadsDelete(index))}>
                    <Image
                      resizeMode="contain"
                      source={require('../assets/icons/trash.png')}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('MainScreen', {
                        title: item.name,
                        overview: item.overview,
                        image: str.concat(item.backdrop_path),
                        update: data.liked.liked,
                      })
                    }
                    style={styles.imageViewItem}>
                    <Image
                      style={styles.imageItem}
                      source={{uri: str.concat(item.poster_path)}}
                      resizeMode="stretch"
                    />
                    <Text style={styles.textItem}>{item.name}</Text>
                  </TouchableOpacity>
                </View>
              )}
              keyExtractor={item => item.id + Math.random()}
            />
          </View>
        )}
      </View>
      <View style={styles.main}>
        {data.watchlist.watchlist.length == 0 ? (
          <View>
            <View style={styles.Header}>
              <Text style={styles.heading}>My Watchlist</Text>
            </View>
            <View style={styles.emptyContainer}>
              <Image source={require('../assets/icons/bookDisabled.png')} />
              <Text style={styles.title}>No videos have been Added</Text>
            </View>
          </View>
        ) : (
          <View>
            <View style={styles.Header}>
              <Text style={styles.heading}> My Watchlist </Text>
            </View>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={data.watchlist.watchlist}
              renderItem={({item, index}) => (
                <View style={styles.containerItem}>
                  <TouchableOpacity
                    onPress={() => dispatch(watchlistDelete(index))}
                    style={styles.trash}>
                    <Image
                      resizeMode="contain"
                      source={require('../assets/icons/trash.png')}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('MainScreen', {
                        title: item.name,
                        overview: item.overview,
                        image: str.concat(item.backdrop_path),
                        update: data.liked.liked,
                      })
                    }
                    style={styles.imageViewItem}>
                    <Image
                      style={styles.imageItem}
                      source={{uri: str.concat(item.poster_path)}}
                      resizeMode="stretch"
                    />
                    <Text style={styles.textItem}>{item.name}</Text>
                  </TouchableOpacity>
                </View>
              )}
              keyExtractor={item => item.id + Math.random()}
            />
          </View>
        )}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  headerView: {
    position: 'absolute',
    width: '100%',
    paddingVertical: '4%',
    marginHorizontal: '5%',
    top: vh(10),
    alignItems: 'center',
  },

  headerText: {color: 'white', fontSize: normalize(25), fontWeight: 'bold'},

  main: {
    flexDirection: 'row',
    width: '100%',
    marginVertical: vh(18),
  },
  emptyContainer: {
    backgroundColor: '#232323',
    width: vw(375),
    paddingHorizontal: '4%',
    paddingVertical: '4%',
    flexDirection: 'row',
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: normalize(15),
    alignSelf: 'center',
    marginHorizontal: vw(40),
  },
  Header: {
    paddingHorizontal: '4%',
    marginBottom: vh(4),
  },
  heading: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: normalize(18),
  },
  textItem: {
    color: 'white',
    fontSize: normalize(10),
    alignSelf: 'center',
    marginTop: vh(3),
  },
  imageViewItem: {
    width: vw(80),
    height: vh(80),
  },
  imageItem: {
    borderRadius: 15,
    width: vw(80),
    height: vh(80),
  },
  containerItem: {
    marginHorizontal: vw(10),
  },
  trash: {
    position: 'absolute',
    bottom: 0,
    zIndex: 1,
    right: 0,
  },
});
