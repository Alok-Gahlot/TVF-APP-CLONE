import * as React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import CustomSwitch from '../components/CustomSwitch';
import Separator from '../components/Separator';
import {vh, vw, normalize} from '../dimensions/dimension';
import CustomSettings from '../components/CustomSettings';

export default function Settings({navigation}) {
  const [value, setValue] = React.useState(false);
  const [play, setPlay] = React.useState(false);
  const [not, setNot] = React.useState(false);

  const onToggle = () => setValue(!value);
  const onTogglePlay = () => setPlay(!play);
  const onToggleNot = () => setNot(!not);

  return (
    <View style={styles.container}>
      <View style={styles.Header}>
        <TouchableOpacity
          style={styles.arrowView}
          onPress={() => navigation.navigate('Play')}>
          <Image source={require('../assets/arrow.png')} style={styles.icon} />
        </TouchableOpacity>
        <View style={styles.viewProfile}>
          <Text style={styles.headerText}>Settings</Text>
        </View>
      </View>
      <View style={styles.parent}>
        <CustomSettings
          title="Video Quality"
          text="Auto select depending on my connection"
        />
        <Separator />
        <View>
          <CustomSettings title="Subtitles" text={value ? 'On' : 'Off'} />
          <View style={styles.switchStyle}>
            <CustomSwitch onToggle={onToggle} />
          </View>
        </View>
        <Separator />
        <CustomSettings title="Downloaded video storage" text="Internal" />
        <Separator />
        <CustomSettings title="App language" text="English" />
        <Separator />
        <View>
          <CustomSettings
            title="Auto videos in Play Feed"
            text={play ? 'On' : 'Off'}
          />
          <View style={styles.switchStyle}>
            <CustomSwitch onToggle={onTogglePlay} />
          </View>
        </View>
        <Separator />
        <View>
          <CustomSettings title="Push notification" text={not ? 'On' : 'Off'} />
          <View style={styles.switchStyle}>
            <CustomSwitch onToggle={onToggleNot} />
          </View>
        </View>
        <Separator />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  Header: {
    width: '100%',
    backgroundColor: '#232323',
    flexDirection: 'row',
    alignItems: 'center',
  },
  arrowView: {
    marginTop: vh(12),
    width: vw(20),
    height: vh(10),
    marginLeft: vw(14),
    alignItems: 'center',
    marginBottom: vh(17),
  },
  icon: {
    width: vw(25),
    height: vh(20),
  },
  viewProfile: {
    marginTop: vh(6),
    marginLeft: '30%',
  },
  switchStyle: {
    position: 'absolute',
    top: vh(10),
    right: vw(15),
  },
  headerText: {color: 'white', fontSize: normalize(16)},
  parent: {width: '100%', marginTop: '10%'},
});
