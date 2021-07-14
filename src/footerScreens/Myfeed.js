import * as React from 'react';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import HomeScreen from './myFeed/HomeScreen';
import SettingScreen from './myFeed/SettingScreen';

const Tab = createMaterialTopTabNavigator();

export default function App({navigation}) {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#FFC104',
        inactiveTintColor: 'white',
        tabStyle: [
          {
            backgroundColor: 'black',
          },
        ],
      }}>
      <Tab.Screen name="VIDEOS" component={HomeScreen} />
      <Tab.Screen name="SHOWS" component={SettingScreen} />
    </Tab.Navigator>
  );
}
