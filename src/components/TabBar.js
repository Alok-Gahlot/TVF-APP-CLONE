import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Animated,
  TouchableOpacity,
  Text,
} from 'react-native';
import {vh} from '../dimensions/dimension';
import Tab from './Tab';
const {width} = Dimensions.get('screen');

const TabBar = ({state, navigation}) => {
  const [selected, setSelected] = useState('Home');
  const {routes} = state;
  const renderColor = currentTab =>
    currentTab === selected ? '#FFC104' : 'white';

  const handlePress = (activeTab, index) => {
    if (state.index !== index) {
      setSelected(activeTab);
      navigation.navigate(activeTab);
    }
  };

  return (
    <View style={styles.wrapper}>
      <Animated.View style={styles.container}>
        {routes.map((route, index) => (
          // <Tab
          //   tab={route}
          //   onPress={() => handlePress(route.name, index)}
          //   color={renderColor(route.name)}
          //   key={route.key}
          // />
          <TouchableOpacity
            style={styles.container}
            onPress={handlePress}
            key={route.key}>
            <Text style={[{renderColor}, styles.text]}>{route.name}</Text>
          </TouchableOpacity>
        ))}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    bottom: vh(10),
    width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    width: '100%',
    elevation: 6,
  },
});

export default TabBar;
