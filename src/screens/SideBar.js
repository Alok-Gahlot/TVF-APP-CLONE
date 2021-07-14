import {DrawerItemList} from '@react-navigation/drawer';
import * as React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {vw, vh, normalize} from '../dimensions/dimension';
import {useSelector} from 'react-redux';
export default function SideBar({email, ...props}) {
  return (
    <View style={styles.parent}>
      <View style={styles.main}>
        <View style={styles.mainDp}>
          <Image source={require('../assets/dp.jpeg')} style={styles.dp} />
          <View style={styles.textView}>
            <Text style={styles.textTitle}>Welcome,</Text>
            <Text style={styles.textEmail}>{email}</Text>
          </View>
        </View>
      </View>
      <DrawerItemList {...props} />
    </View>
  );
}
const styles = StyleSheet.create({
  parent: {backgroundColor: 'black', height: vh(675)},
  container: {
    flex: 1,
    backgroundColor: 'black', //
    paddingTop: '9%',
  },
  main: {
    backgroundColor: 'black', //
    height: '20%',
    marginBottom: '10%',
    justifyContent: 'center',
  },
  dp: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: '#FFF',
  },
  mainDp: {
    flexDirection: 'row',
  },
  textView: {
    marginLeft: '8%',
    justifyContent: 'center',
  },
  textTitle: {
    fontSize: normalize(16),
    color: 'white',
  },
  textEmail: {
    fontSize: normalize(12),
    color: 'white',
  },
});
