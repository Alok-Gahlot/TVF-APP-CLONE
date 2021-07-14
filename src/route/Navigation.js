import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Splash from '../screens/Splash';
import Onboarding from '../screens/Onboarding';
import SkipScreen from '../screens/SkipScreen';
import Email from '../screens/Email';
import Password from '../screens/Password';
import TermsOfUse from '../screens/TermsOfUse';
import PrivacyPolicy from '../screens/PrivacyPolicy';
import Drawer from './Drawer';
import VideoPlayer from '../footerScreens/VideoPlayer';
import MainScreen from '../screens/MainScreen';
import VideoPlayed from '../screens/VideoPlayed';
import Shows from '../searchScreens/Shows';
const Stack = createStackNavigator();

export default function OnboardingItem() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SkipScreen"
          component={SkipScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Email"
          component={Email}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Password"
          component={Password}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Drawer"
          component={Drawer}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TermsOfUse"
          component={TermsOfUse}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PrivacyPolicy"
          component={PrivacyPolicy}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="VideoPlayer"
          component={VideoPlayer}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MainScreen"
          component={MainScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="VideoPlayed"
          component={VideoPlayed}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
