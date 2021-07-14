import * as React from 'react';
import { View , Text, StyleSheet, Image,Dimensions,  } from 'react-native';
import {vw , vh , normalize} from '../dimensions/dimension'
const Width= Dimensions.get('window').width


export default function OnboardingItem({item, navigation}){


    
    return(
        <View style={styles.container}>
            <View>
           <Image style={styles.image} source={item.image} />
           <View style={styles.textView} >
               <Text style={styles.titleText}>
                    {item.title}
               </Text>
               <Text style={styles.descriptionText}> 
                   {item.description}
                   </Text>
           </View>
           <View style={styles.opac}>
                <Text>Hellc</Text>
            </View>
           </View>
           
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'black',

    }, 
    image: {
        width: vw(375) ,
         height:vh(500),
        alignSelf:'center', 
        opacity: 0.6,
        resizeMode:'stretch'
    }, 

    textView:{
        position: 'absolute',
        bottom:vh(70), 
        width: '80%', 
        alignItems: 'center',
        alignSelf: 'center',
    }, 
    titleText:{
        color:'white', 
        fontWeight:'bold',
    }, 
    descriptionText:{ color: 'white', textAlign: 'justify',fontWeight:'bold', fontSize:normalize(15)},
 opac:{
     backgroundColor: 'rgba(0, 0, 0,0);', 
     height:vh(100),
     position: 'absolute',
     width:vw(375),
     bottom:vh(0)
 }
}) 