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
import {useSelector} from 'react-redux';

export default function CustomView({update, image, title, text}) {
  const str = 'https://image.tmdb.org/t/p/original';
  const [array, setArray] = React.useState(update);

  function onDelete(index) {
    update.map((value, idx) => {
      if (index == idx) {
        setArray(update.slice(idx, 1));
      }
    });
  }

  return (
    <View style={styles.main}>
      {update.length == 0 ? (
        <View>
          <View style={styles.Header}>
            <Text style={styles.heading}>{title}</Text>
          </View>
          <View style={styles.emptyContainer}>
            <Image source={image} />
            <Text style={styles.title}>{text}</Text>
          </View>
        </View>
      ) : (
        <View>
          <View style={styles.Header}>
            <Text style={styles.heading}> {title} </Text>
          </View>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={array}
            renderItem={({item, index}) => (
              <View style={styles.containerItem}>
                <TouchableOpacity onPress={() => onDelete(index)}>
                  <Image
                    resizeMode="contain"
                    source={require('../assets/icons/trash.png')}
                  />
                </TouchableOpacity>
                <View style={styles.imageViewItem}>
                  <Image
                    style={styles.imageItem}
                    source={{uri: str.concat(item.poster_path)}}
                    resizeMode="stretch"
                  />
                  <Text style={styles.textItem}>{item.name}</Text>
                </View>
              </View>
            )}
            keyExtractor={item => item.id + Math.random()}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    width: vw(375),
    marginBottom: vh(50),
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
});
