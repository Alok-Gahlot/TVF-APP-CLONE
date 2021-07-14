import * as React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import CustomInput from '../components/CustomInput';
import {Formik} from 'formik';
import * as yup from 'yup';
import {signUp} from '../redux/actions';
import {useDispatch} from 'react-redux';
import {vw, vh, normalize} from '../dimensions/dimension';
import {ScrollView} from 'react-native-gesture-handler';

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required()
    .max(20, 'Enter Valid Name')
    .min(4, 'Enter Valid Username'),
  email: yup.string().required().email(),
  password: yup
    .string()
    .required()
    .min(6, 'Password too small')
    .max(15, 'Password too long'),
  confirmpassword: yup
    .string()
    .required()
    .min(6, 'Password too short')
    .max(20, 'Password too long')
    .test(
      'password-match',
      'Password and confirm password must match',
      function (value) {
        return this.parent.password === value;
      },
    ),
});

export default function Password({navigation}) {
  const [isVisible, setIsVisible] = React.useState(true);
  const dispatch = useDispatch();
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity style={styles.icon} onPress={() => navigation.goBack()}>
        <Image style={styles.iconPng} source={require('../assets/arrow.png')} />
      </TouchableOpacity>
      <Text style={styles.Title}>Register Yourself Here...!</Text>
      <Formik
        initialValues={{
          email: '',
          password: '',
          username: '',
          confirmpassword: '',
        }}
        validationSchema={validationSchema}
        onSubmit={value => {
          console.log(value);
          dispatch(signUp(value));
          navigation.navigate('Email');
        }}>
        {formikProps => (
          <React.Fragment>
            <View style={styles.pass}>
              <CustomInput
                label="USERNAME"
                formikProps={formikProps}
                formikKey="username"
              />
            </View>
            <CustomInput
              label="EMAIL"
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
            <View>
              <CustomInput
                label="CONFIRM PASSWORD"
                formikProps={formikProps}
                formikKey="confirmpassword"
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
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flexGrow: 1,
  },
  button: {
    width: '100%',
    alignItems: 'center',
    padding: '2%',
    height: vh(46),
    position: 'absolute',
    backgroundColor: '#FFC104',
    bottom: 0,
    justifyContent: 'center',
  },
  Title: {
    color: 'white',
    fontSize: normalize(22),
    marginLeft: '4%',
    fontWeight: '800',
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
  toggleText: {
    color: 'white',
    position: 'absolute',
    fontSize: normalize(12),
    top: normalize(35),
    right: normalize(10),
  },
  text: {
    fontSize: normalize(14),
    fontWeight: 'bold',
  },
  pass: {
    marginVertical: vh(16),
  },
});
