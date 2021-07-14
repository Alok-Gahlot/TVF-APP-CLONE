import * as React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  FlatList,
  Animated,
  TouchableOpacity,
  Modal,
  Dimensions,
} from 'react-native';
import OnboardingItem from './OnboardingItem';
import {data} from '../constants/Contants';
import CustomButton from '../components/CustomButton';
const Width = Dimensions.get('window').width;
import {vw, vh, normalize} from '../dimensions/dimension';

export default function Onboarding({navigation}) {
  const [value, setValue] = React.useState(false);
  const scrollX = new Animated.Value(0);
  let position = Animated.divide(scrollX, Width);
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return <OnboardingItem item={item} navigation={navigation} />;
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        snapToAlignment={'center'}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false},
        )}
      />
      <View style={styles.dotView}>
        {data.map((_, i) => {
          let opacity = position.interpolate({
            inputRange: [i - 1, i, i + 1],
            outputRange: [0.3, 1, 0.3],
            extrapolate: 'clamp',
          });
          return (
            <Animated.View
              key={i}
              style={{
                opacity,
                width: 10,
                height: 10,
                borderRadius: 5,
                margin: 8,
                backgroundColor: 'white',
              }}
            />
          );
        })}
      </View>
      <View style={styles.buttonView}>
        <TouchableOpacity onPress={() => setValue(true)}>
          <CustomButton />
        </TouchableOpacity>
      </View>

      {value ? (
        <Modal visible={value} animationType="slide" transparent={true}>
          <View style={styles.modalParentView}>
            <View style={styles.modalView}>
              <Text onPress={() => setValue(false)} style={styles.modalText}>
                Hello there!
              </Text>
              <Text
                onPress={() => setValue(false)}
                style={{...styles.modalText, marginBottom: '-6%'}}>
                Let us quickly get you started.
              </Text>

              <Image
                style={styles.imageIcon}
                source={require('../assets/fb1.jpeg')}
              />
              <Text
                onPress={() => setValue(false)}
                style={{...styles.modalText, marginTop: '-3%'}}>
                OR
              </Text>
              <View>
                <Image
                  style={styles.imageIcon}
                  source={require('../assets/google.jpeg')}
                />
                <TouchableOpacity
                  style={{marginTop: '-15%'}}
                  onPress={() => {
                    navigation.navigate('Email');
                    setValue(false);
                  }}>
                  <Image
                    style={{...styles.imageIcon}}
                    source={require('../assets/email.jpeg')}
                  />
                </TouchableOpacity>
              </View>
              <Text
                onPress={() => setValue(false)}
                style={styles.modalLastText}>
                By signing up via Email/Google/Facebook you agree to
              </Text>
              <Text style={styles.modalLastText}>
                {' '}
                TVFPlay's{' '}
                <Text
                  onPress={() => {
                    setValue(false);

                    navigation.navigate('TermsOfUse');
                  }}
                  style={{textDecorationLine: 'underline'}}>
                  Terms of Use
                </Text>{' '}
                and{' '}
                <Text
                  onPress={() => {
                    setValue(false);
                    navigation.navigate('PrivacyPolicy');
                  }}
                  style={{textDecorationLine: 'underline'}}>
                  Privacy Policy.
                </Text>
              </Text>
              <Text
                onPress={() => {
                  setValue(false);
                  navigation.navigate('SkipScreen');
                }}
                style={styles.skip}>
                {' '}
                Skip for now
              </Text>
            </View>
          </View>
        </Modal>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  dotView: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    bottom: '15%',
    alignSelf: 'center',
  },
  modalParentView: {backgroundColor: 'rgba(0, 0, 0, 0.4);', flex: 1},

  modalView: {
    backgroundColor: '#151518',
    marginVertical: vh(140),
    width: vw(330),
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
  modalText: {
    color: 'white',
    fontSize: normalize(15),
  },
  imageIcon: {
    width: vw(200),
    height: vh(100),
    resizeMode: 'contain',
  },

  skip: {
    color: '#FFC104',
    marginVertical: '4%',
    fontSize: normalize(13),
  },
  container: {
    backgroundColor: 'black',
    flex: 1,
  },
  buttonView: {
    marginBottom: vh(30),
  },
  opac: {
    backgroundColor: 'rgba(0, 0, 0, 0.2);',
    height: vh(100),
    width: vw(375),
  },
});
