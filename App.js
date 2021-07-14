import * as React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import Navigation from './src/route/Navigation';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import {vh} from './src/dimensions/dimension';
export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Navigation />
      </View>
    </Provider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black', //
  },
});
