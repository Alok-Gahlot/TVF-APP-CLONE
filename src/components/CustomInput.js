import * as React from 'react';
import {View, Text, StyleSheet, TextInput, Modal} from 'react-native';

export default function CustomInput({label, formikProps, formikKey, ...rest}) {
  const [value , setValue] = React.useState(false)
  return (
    <View style={styles.container}>
      <Text style={{marginLeft: '4%',color: 'white',}}>{label}</Text>
      <TextInput
        style={styles.input}
        selectionColor={'#FFC104'}
        onChangeText={formikProps.handleChange(formikKey)}
        onBlur={formikProps.handleBlur(formikKey)}
        {...rest}
      />
      <Text style={styles.errorText} >{formikProps.touched[formikKey] && formikProps.errors[formikKey]}</Text>
        </View>
  );
}
const styles = StyleSheet.create({
 
  input: {
    padding: '4%',
    borderBottomWidth: 2,
    width: '96%',
    backgroundColor: 'black',
    borderColor: '#FFC104',
    color: 'white',
    marginLeft: '4%',
    marginBottom: '4%'
  },
  errorView: {
    position: 'absolute',
    bottom: 0, 
    height: '6%', 
    padding : '4%',
    backgroundColor: 'red', 
    width : '100%',
    textAlign: 'center',
    zIndex: 1000
  },
  errorText:{
    color:'red', 
    fontWeight: 'bold', 
    alignSelf: 'center',
    
  }
});
