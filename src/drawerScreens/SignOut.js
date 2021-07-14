import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  Image,
} from 'react-native';
import {vw, vh, normalize} from '../dimensions/dimension';

export default function SignOut({navigation}) {
  const [value, setValue] = React.useState(true);
  React.useEffect(() => {
    setValue(true);
  });
  return (
    <View style={styles.container}>
      <View style={styles.modalView}>
        <View style={styles.d}>
          <Text style={styles.text}>Do you really want to log out ?</Text>
          <View style={styles.yes}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Email');
              }}>
              <Text style={styles.yesText}>Yes</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Play');
              }}>
              <Text style={styles.yesText}>No</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  modalParentView: {backgroundColor: 'rgba(0, 0, 0, 0.4);', flex: 1},

  modalView: {
    backgroundColor: '#151518',
    marginVertical: vh(280),
    width: vw(250),
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 1,
    flex: 1,
    alignSelf: 'center',
  },
  modalLastText: {
    color: 'white',
    fontSize: normalize(10),
    alignSelf: 'center',
    textAlign: 'justify',
  },

  container: {
    backgroundColor: 'black',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  opac: {
    backgroundColor: 'rgba(0, 0, 0, 0.2);',
    height: vh(100),
    width: vw(375),
  },
  d: {
    width: '80%',
    height: '70%',

    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: normalize(14),
    textAlign: 'center',
    marginVertical: vh(20),
  },
  yes: {
    width: '100%',
    height: '60%',

    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  yesText: {
    fontSize: normalize(18),
    color: '#ffc104',
  },
});
