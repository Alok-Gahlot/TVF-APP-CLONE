import * as React from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
  Text,
} from 'react-native';
import VideoPlayer from './VideoPlayer';

import 'react-native-gesture-handler';
import {vw, vh, normalize} from '../dimensions/dimension';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';

import Separator from '../components/Separator';
const Tab = createBottomTabNavigator();

export default function Play({navigation}) {
  const [showModal, setShowModal] = React.useState(false);
  const [videos, setVideos] = React.useState(false);
  const [shows, setShows] = React.useState(false);
  const [channels, setChannels] = React.useState(false);
  const [hindi, setHindi] = React.useState(false);
  const [english, setEnglish] = React.useState(false);

  let colorV = videos ? '#ffc104' : 'gray';
  let colorS = shows ? '#ffc104' : 'gray';
  let colorC = channels ? '#ffc104' : 'gray';
  let colorH = hindi ? '#ffc104' : 'gray';
  let colorE = english ? '#ffc104' : 'gray';

  const ClearFnction = () => {
    setVideos(false);
    setShows(false);
    setHindi(false);
    setEnglish(false);
    setChannels(false);
  };

  return (
    <View style={styles.containerM}>
      {
        // Header Started
      }
      <View style={styles.Header}>
        <TouchableOpacity
          style={styles.breadView}
          onPress={() => navigation.toggleDrawer()}>
          <Image
            style={styles.image}
            source={require('../assets/icons/icon.png')}
            resizeMode="center"
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.breadView}
          onPress={() => navigation.toggleDrawer()}>
          <Image
            style={styles.imageTvf}
            source={require('../assets/TVF_SPLASH.png')}
            resizeMode="center"
          />
        </TouchableOpacity>
        {videos || channels || hindi || english || shows ? (
          <TouchableOpacity
            style={styles.breadView2}
            onPress={() => setShowModal(!showModal)}>
            <Image
              style={styles.imageSet}
              source={require('../assets/icons/settngsEnabled.png')}
              resizeMode="center"
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.breadView2}
            onPress={() => setShowModal(!showModal)}>
            <Image
              style={styles.imageSet}
              source={require('../assets/icons/setting-lines.png')}
              resizeMode="center"
            />
          </TouchableOpacity>
        )}
      </View>

      <Modal transparent={true} visible={showModal}>
        <TouchableOpacity
          style={{flex: 1}}
          onPress={() => setShowModal(!showModal)}>
          <View style={styles.modalParentView}>
            <View style={styles.mainModal}>
              <View style={styles.modalContainer}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={styles.filters}>Filters</Text>
                  <Text onPress={ClearFnction} style={styles.clear}>
                    Clear
                  </Text>
                </View>
                <Separator />
                <View style={styles.typeContainer}>
                  <Text style={styles.type}>Type</Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-around',
                    }}>
                    <TouchableOpacity
                      onPress={() => setVideos(!videos)}
                      style={[styles.button, {backgroundColor: colorV}]}>
                      <Text style={styles.textVideos}>Videos</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => setChannels(!channels)}
                      style={[styles.button, {backgroundColor: colorC}]}>
                      <Text style={styles.textVideos}>Channels</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => setShows(!shows)}
                      style={[styles.button, {backgroundColor: colorS}]}>
                      <Text style={styles.textVideos}>Shows</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={{marginTop: vh(10)}}>
                    <Text style={styles.type}>Language</Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                      }}>
                      <TouchableOpacity
                        onPress={() => setHindi(!hindi)}
                        style={[styles.button, {backgroundColor: colorH}]}>
                        <Text style={styles.textVideos}>Hindi</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => setEnglish(!english)}
                        style={[styles.button, {backgroundColor: colorE}]}>
                        <Text style={styles.textVideos}>English</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
      {
        // Header Ended
      }
      {
        // Body Started
      }
      <VideoPlayer navigation={navigation} />
      {
        // Footer
      }
    </View>
  );
}

const styles = StyleSheet.create({
  containerM: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: 'black',
    zIndex: 10,
    height: '100%',
  },
  Header: {
    flexDirection: 'row',
    width: '100%',
    height: '10%',
    alignItems: 'center',
    justifyContent: 'space-between',
    top: 0,
    paddingHorizontal: '2%',
    backgroundColor: 'transparent',
  },
  breadView: {
    width: vw(30),
    height: vh(43),
    alignItems: 'center',
    justifyContent: 'center',
  }, //
  image: {
    width: '100%',
    height: '63%',
    alignSelf: 'center',
  },
  imageTvf: {
    width: '170%',
    height: '70%',
    alignSelf: 'center',
    marginHorizontal: '7%',
  },
  imageSet: {
    width: '80%',
    height: '75%',
    alignSelf: 'center',
  },
  breadView2: {
    width: '10%',
    height: '60%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalParentView: {backgroundColor: 'rgba(0, 0, 0, 0.4);', flex: 1},
  mainModal: {
    alignSelf: 'flex-end',
    height: vh(180), //
    width: vw(375), //
    backgroundColor: 'black',
    marginTop: vh(486),
  },
  modalContainer: {
    width: '100%',
    height: '90%',
    backgroundColor: 'black',
    alignSelf: 'center',
    paddingHorizontal: vw(10),
  },
  filters: {
    fontSize: normalize(20), //
    fontWeight: 'bold',
    color: 'white',
  },
  clear: {
    fontSize: normalize(17), //
    color: '#ffc104',
  },
  typeContainer: {
    marginVertical: vh(5),
  },
  type: {
    color: 'white',
    fontWeight: 'bold',
    marginBottom: vh(4),
  },
  button: {
    paddingHorizontal: vw(16),
    paddingVertical: vh(5),
    borderRadius: normalize(70),
  },
  textVideos: {
    color: 'black',
    fontSize: normalize(15),
  },
});
