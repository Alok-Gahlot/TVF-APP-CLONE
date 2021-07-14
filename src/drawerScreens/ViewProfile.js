import * as React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Separator from '../components/Separator';
import {vh, vw, normalize} from '../dimensions/dimension';
import {useSelector} from 'react-redux';

export default function ViewProfile({navigation}) {
  const data = useSelector(state => {
    return state;
  });
  console.log(data.reducer.data[0]);
  return (
    <View style={styles.container}>
      <View style={styles.Header}>
        <TouchableOpacity
          style={styles.arrowView}
          onPress={() => navigation.navigate('Play')}>
          <Image source={require('../assets/arrow.png')} style={styles.icon} />
        </TouchableOpacity>
        <View style={styles.viewProfile}>
          <Text style={styles.headerText}>View Profile</Text>
        </View>
      </View>
      <View style={styles.parent}>
        <View style={styles.mainSection}>
          <Text style={styles.caption}>Name</Text>
          <Text style={styles.content}>{data.reducer.data[0].username}</Text>
        </View>
        <Separator />
        <View style={styles.mainSection}>
          <Text style={styles.caption}>Email ID </Text>
          <Text style={styles.content}>{data.reducer.data[0].email}</Text>
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
  headerText: {color: 'white', fontSize: normalize(16)},
  mainSection: {
    width: '100%',
    paddingHorizontal: '6%',
    marginBottom: '4%',
  },
  caption: {
    color: 'white',
    fontSize: normalize(12),
  },
  content: {color: 'white', fontSize: normalize(17), marginVertical: vh(4)},
  parent: {width: '100%', marginTop: '10%'},
});
