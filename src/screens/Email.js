import * as React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import CustomInput from '../components/CustomInput';
import {Formik} from 'formik'; //
import * as yup from 'yup';
import {signIn} from '../redux/actions';
import {useSelector, useDispatch} from 'react-redux';
import {vw, vh, normalize} from '../dimensions/dimension';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ScrollView} from 'react-native-gesture-handler';

const validationSchema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup
    .string()
    .required()
    .min(6, 'Password too small')
    .max(15, 'Password too long'),
});

export default function Email({navigation}) {
  const [isVisible, setIsVisible] = React.useState(true);
  const variable = null;
  const dispatch = useDispatch();

  React.useEffect(() => {
    AsyncStorage.getItem('emailScreen').then(value => {
      if (value != null) {
        AsyncStorage.setItem('emailScreen', 'true');
      } else {
        AsyncStorage.setItem('emailScreen', 'false');
      }
    });
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.icon} onPress={() => navigation.goBack()}>
        <Image style={styles.iconPng} source={require('../assets/arrow.png')} />
      </TouchableOpacity>
      <Text style={styles.Title}>Login Here.....!</Text>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={validationSchema}
        onSubmit={value => {
          dispatch(
            signIn({...value, navigation: navigation, variable: variable}),
          );
        }}>
        {formikProps => (
          <React.Fragment>
            <CustomInput
              label="EMAIL ADDRESS"
              formikProps={formikProps}
              formikKey="email"
            />
            <View style={styles.pass}>
              <CustomInput
                label="PASSWORD"
                formikProps={formikProps}
                formikKey="password"
                secureTextEntry={isVisible}
              />
              {isVisible ? (
                <Text
                  style={styles.toggleText}
                  onPress={() => setIsVisible(!isVisible)}>
                  SHOW
                </Text>
              ) : (
                <Text
                  style={styles.toggleText}
                  onPress={() => setIsVisible(!isVisible)}>
                  HIDE
                </Text>
              )}
            </View>
            <TouchableOpacity
              style={styles.button}
              onPress={formikProps.handleSubmit}>
              <Text style={styles.text}>Next</Text>
            </TouchableOpacity>
          </React.Fragment>
        )}
      </Formik>
      <View style={styles.textView}>
        <Text style={styles.sign}>
          Don't have an account?{' '}
          <Text
            onPress={() => navigation.navigate('Password')}
            style={{textDecorationLine: 'underline', color: '#FFC104'}}>
            SignUpHere
          </Text>
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
  },
  button: {
    width: '100%',
    alignItems: 'center',
    padding: '1%',
    height: vh(46),
    position: 'absolute',
    backgroundColor: '#FFC104',
    bottom: 0,
    justifyContent: 'center',
  },
  Title: {
    color: 'white',
    fontSize: normalize(20),
    marginLeft: '4%',
    fontWeight: '800',
    marginBottom: '10%',
    marginTop: vh(15),
  },
  icon: {
    marginTop: vh(12),
    width: vw(20),
    height: vh(10),
    marginLeft: vw(14),
    alignItems: 'center',
    marginBottom: vh(17),
  },
  iconPng: {
    width: vw(25),
    height: vh(20),
  },
  text: {
    fontSize: normalize(14),
    fontWeight: 'bold',
  },
  pass: {
    marginVertical: vh(16),
  },
  toggleText: {
    color: 'white',
    position: 'absolute',
    fontSize: normalize(12),
    top: normalize(35),
    right: normalize(10),
  },
  textView: {
    width: '100%', //
    marginTop: vh(16),
    alignItems: 'center',
  },
  sign: {color: 'white', fontSize: normalize(13)},
});
