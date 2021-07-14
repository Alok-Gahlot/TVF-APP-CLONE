import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';

import {vh, vw, normalize} from '../../dimensions/dimension';
import CustomLiked from '../../components/CustomLiked';
import CustomBook from '../../components/CustomBook';
import CustomDownload from '../../components/CustomDownload';
import {useDispatch} from 'react-redux';
import {likedArray, watchlistArray, downloadsArray} from '../../redux/actions';

export default function HomeScreen({navigation}) {
  const [like, setLike] = React.useState(false);
  const [watch, setWatch] = React.useState(false);
  const [down, setDown] = React.useState(false);

  const dispatch = useDispatch();

  const fetchData = () => {
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
  };

  const [data, setData] = React.useState([]);
  const [arrayLiked, setArrayLiked] = React.useState([]);
  const onToggle = idx => {
    DataUpdate(idx);
    setLike(!like);
  };

  const onToggleWatch = idx => {
    setWatch(!watch);
    DataUpdateWatch(idx);
  };

  const onToggleDown = idx => {
    setDown(!down);
    DataUpdateDown(idx);
  };

  const DataUpdate = idx => {
    setData(
      data.map((item, index) => {
        if (index == idx) {
          setArrayLiked([arrayLiked, item]);
          dispatch(likedArray(item));
          return {...item, liked: true};
        } else {
          return {...item, liked: false};
        }
      }),
    );
  };

  const DataUpdateDown = idx => {
    setData(
      data.map((item, index) => {
        if (index == idx) {
          // setArrayLiked([arrayLiked, item]);
          dispatch(downloadsArray(item));
          return {...item, liked: true};
        } else {
          return {...item, liked: false};
        }
      }),
    );
  };

  const DataUpdateWatch = idx => {
    setData(
      data.map((item, index) => {
        if (index == idx) {
          //setArrayLiked([arrayLiked, item]);
          dispatch(watchlistArray(item));
          return {...item, liked: true};
        } else {
          return {...item, liked: false};
        }
      }),
    );
  };

  const [isLoading, setLoading] = React.useState(true);
  const str = 'https://image.tmdb.org/t/p/original';
  React.useEffect(() => {
    fetchData();
  }, []);
  console.log('array', arrayLiked);
  const DataSet = index => setArrayLiked([...arrayLiked, index]);
  const videoRender = ({item, index}) => {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.imageView}
          onPress={() => {
            navigation.navigate('MainScreen', {
              title: item.name,
              image: str.concat(item.poster_path),
              overview: item.overview, //
              update: data,
            });
            console.log('ejhcjebwjcw', item);
          }}>
          <Image
            source={{uri: str.concat(item.backdrop_path)}}
            style={styles.image1}
            resizeMode="stretch"
          />
        </TouchableOpacity>
        <View style={styles.bottomView}>
          <View style={styles.avatarView}>
            <Image
              style={styles.avatar}
              source={require('../../assets/channels/tvf_originals.jpeg')}
            />
          </View>
          <View>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.subTitle}>
              {item.vote_count} Votes | Ratings : {item.vote_average}
            </Text>
          </View>
          <View style={styles.moreView}>
            <CustomLiked index={index} onToggle={onToggle} />

            <CustomBook index={index} onToggle={onToggleWatch} />
            <CustomDownload index={index} onToggle={onToggleDown} />
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.videoScreen}>
      <FlatList
        data={data}
        renderItem={videoRender}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  videoScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  showScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  image1: {height: vh(130), width: vw(373)},
  container: {
    width: vw(375),
    marginVertical: vh(3),
    borderWidth: 1, //
    borderColor: '#ffc104',
  },
  imageView: {
    width: '100%',
    height: vh(130),
  },
  bottomView: {
    flexDirection: 'row',
    marginVertical: vh(10),
    marginHorizontal: vw(20),
  },
  title: {
    fontWeight: 'bold', //
    color: 'white', //
    fontSize: normalize(15),
    width: vw(200),
  },
  subTitle: {
    color: 'white',
    fontSize: normalize(12),
  },
  avatarView: {
    width: 35,
    height: 52,
    marginRight: vw(8),
  },
  avatar: {
    borderRadius: 70,
    width: 35,
    height: 32,
  },
  more: {
    height: vh(10),
    width: vw(10),
  },
  moreView: {
    position: 'absolute',
    right: vw(10),
    top: vh(13),
    flexDirection: 'row',
  },
  modalView: {
    backgroundColor: '#151518',
    marginVertical: vh(270),
    justifyContent: 'center',
    opacity: 1,
    flex: 1,
    alignSelf: 'center',
  },
  modalParentView: {backgroundColor: 'rgba(0, 0, 0, 0.4);', flex: 1},
});
