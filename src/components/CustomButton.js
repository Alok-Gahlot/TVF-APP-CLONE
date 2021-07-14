import * as React from "react"; 
import { View , Text, StyleSheet , TouchableOpacity, Modal} from 'react-native';
import {vw , vh , normalize} from '../dimensions/dimension'
export default function CustomButton(){
    const [value , setValue] = React.useState(false)
return (
        <View style={styles.button} >
            <Text style={styles.buttonText} >
                START WATCHING
            </Text>
        </View>

)
}
const styles = StyleSheet.create({


button : {
    backgroundColor: '#FFC104', 
    padding : '3%', 
    borderRadius :70, 
    width : '60%', 
    alignItems: 'center', 
    justifyContent: 'center',
    alignSelf:'center' 
}, 
buttonText:{
fontSize : vh(13), 
fontWeight: 'bold',
},
modalView: {
    height:"8%", 
    backgroundColor: 'red', 
    padding : '3%', 
    width : '100%', //
    marginTop:'89%'
}, 
modalText: {
    color: 'white',
    fontSize : 15, 
    fontWeight:'bold'
}
})