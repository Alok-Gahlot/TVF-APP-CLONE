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

import {vh, vw, normalize} from '../dimensions/dimension';

export default function CustomDownload({onToggle, index}) {
  const [likedData, setLikedData] = React.useState(false);
  const toggleSwitch = () => {
    setLikedData(previousState => !previousState);
    onToggle(index);
  };
  return (
    <View>
      {likedData ? (
        <View style={styles.likeView}>
          <View style={styles.likeImageView}>
            <TouchableOpacity onPress={toggleSwitch}>
              <Image
                source={require('../assets/icons/downEnabled.png')}
                style={styles.likeImage}
                resizeMode="stretch"
              />
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <View style={styles.likeView}>
          <View style={styles.likeImageView}>
            <TouchableOpacity onPress={toggleSwitch}>
              <Image
                source={require('../assets/icons/downDisabled.png')}
                style={styles.likeImage}
                resizeMode="stretch"
              />
            </TouchableOpacity>
          </View>
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
    width: vw(15),
    height: vh(15),
    marginHorizontal: vh(5),
    // marginVertical: vh(5),
  },
  likeImage: {
    width: vw(15),
    height: vh(15),
  },
});
