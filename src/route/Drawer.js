import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import SideBar from '../screens/SideBar';
import ViewProfile from '../drawerScreens/ViewProfile';
import Feedback from '../drawerScreens/Feedback';
import Settings from '../drawerScreens/Settings';
import SignOut from '../drawerScreens/SignOut';
import About from '../drawerScreens/About';
import RateApp from '../drawerScreens/RateApp';
import Footer from './Footer';
import {useDispatch} from 'react-redux';

const Drawer = createDrawerNavigator();

export default function App({route}) {
  const email = route.params.email;
  return (
    <Drawer.Navigator
      initialRouteName="Footer"
      drawerContentOptions={{
        activeTintColor: '#FFC104',
        activeBackgroundColor: 'gray',
        inactiveTintColor: 'white',
      }}
      drawerContent={props => <SideBar email={email} {...props} />}>
      <Drawer.Screen name="Play" component={Footer} />
      <Drawer.Screen name="View Profile" component={ViewProfile} />
      <Drawer.Screen name="Settings" component={Settings} />
      <Drawer.Screen name="Rate the App" component={RateApp} />
      <Drawer.Screen name="Feedback" component={Feedback} />
      <Drawer.Screen name="About TVF" component={About} />
      <Drawer.Screen name="SignOut" component={SignOut} />
    </Drawer.Navigator>
  );
}
