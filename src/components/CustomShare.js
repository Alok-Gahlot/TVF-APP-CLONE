import * as React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';

import {vh, vw} from '../dimensions/dimension';

export default function CustomDownload() {
  const [liked, setLiked] = React.useState(false);

  return (
    <View>
      {liked ? (
        <View style={styles.likeView}>
          <View style={styles.likeImageView}>
            <TouchableOpacity onPress={() => setLiked(!liked)}>
              <Image
                source={require('../assets/icons/shareEnabled.png')}
                style={styles.likeImage}
                resizeMode="stretch"
              />
            </TouchableOpacity>
          </View>
          <Text
            style={{
              color: '#ffc104',
              textAlign: 'center',
              alignSelf: 'center',
              marginHorizontal: vw(35),
            }}>
            Shared
          </Text>
        </View>
      ) : (
        <View style={styles.likeView}>
          <View style={styles.likeImageView}>
            <TouchableOpacity onPress={() => setLiked(!liked)}>
              <Image
                source={require('../assets/icons/shareDIsabled.png')}
                style={styles.likeImage}
                resizeMode="stretch"
              />
            </TouchableOpacity>
          </View>
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
              alignSelf: 'center',
              marginHorizontal: vw(35),
            }}>
            Share
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  modalView: {
    backgroundColor: '#151518',
    marginVertical: vh(250),
    width: vw(250),
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 1,
    flex: 1,
    alignSelf: 'center',
  },
  modalParentView: {backgroundColor: 'rgba(0, 0, 0, 0.4);', flex: 1},
  likeView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  likeImageView: {
    width: vw(20),
    height: vh(20),
    marginLeft: vw(10),
    marginVertical: vh(5),
  },
  likeImage: {
    width: vw(20),
    height: vh(20),
  },
});
