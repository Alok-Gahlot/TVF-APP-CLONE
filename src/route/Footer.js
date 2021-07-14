import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';
import Play from '../footerScreens/Play';
import Myfeed from '../footerScreens/Myfeed';
import Search from '../footerScreens/Search';
import Notification from '../footerScreens/Notification';
import Saved from '../footerScreens/Saved';
import {View, Image, StyleSheet} from 'react-native';
import {vw, vh, normalize} from '../dimensions/dimension';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#FFC104',
        inactiveTintColor: 'white',
        tabStyle: [
          {
            backgroundColor: 'black',
            height: '100%',
            alignSelf: 'flex-end',
            width: '100%',
            bottom: 0,
          },
        ],
        safeAreaInsets: {
          bottom: 0,
        },
      }}>
      <Tab.Screen
        name="Play"
        component={Play}
        options={{
          tabBarIcon: ({focused}) => {
            return focused ? (
              <View style={styles.container}>
                <Image
                  style={styles.icon}
                  resizeMode="center"
                  source={require('../assets/footerIcons/playEnabled.png')}
                />
              </View>
            ) : (
              <View style={styles.container}>
                <Image
                  style={styles.icon}
                  resizeMode="center"
                  source={require('../assets/footerIcons/playDisabled.png')}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Myfeed"
        component={Myfeed}
        options={{
          tabBarIcon: ({focused}) => {
            return focused ? (
              <View style={styles.container}>
                <Image
                  style={styles.icon}
                  resizeMode="center"
                  source={require('../assets/footerIcons/feedEnabled.png')}
                />
              </View>
            ) : (
              <View style={styles.container}>
                <Image
                  style={styles.icon}
                  resizeMode="center"
                  source={require('../assets/footerIcons/feedDisabled.png')}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({focused}) => {
            return focused ? (
              <View style={styles.container}>
                <Image
                  style={styles.icon}
                  resizeMode="center"
                  source={require('../assets/footerIcons/searchEnabled.png')}
                />
              </View>
            ) : (
              <View style={styles.container}>
                <Image
                  style={styles.icon}
                  resizeMode="center"
                  source={require('../assets/footerIcons/searchDisabled.png')}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          tabBarIcon: ({focused}) => {
            return focused ? (
              <View style={styles.container}>
                <Image
                  style={styles.icon}
                  resizeMode="center"
                  source={require('../assets/footerIcons/notEnabled.png')}
                />
              </View>
            ) : (
              <View style={styles.container}>
                <Image
                  style={styles.icon}
                  resizeMode="center"
                  source={require('../assets/footerIcons/notDisabled.png')}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Saved"
        component={Saved}
        options={{
          tabBarIcon: ({focused}) => {
            return focused ? (
              <View style={styles.container}>
                <Image
                  style={styles.icon}
                  resizeMode="center"
                  source={require('../assets/footerIcons/savedEnabled.png')}
                />
              </View>
            ) : (
              <View style={styles.container}>
                <Image
                  style={styles.icon}
                  resizeMode="center"
                  source={require('../assets/footerIcons/savedDisabled.png')}
                />
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    width: vw(22),
    height: normalize(100),
  },
  icon: {
    width: '100%',
    height: '100%',
  },
});
