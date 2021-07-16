import React, {useState}from 'react';
import { StyleSheet, Text, View,Button,Alert,image} from 'react-native';
import {Poppins_700Bold,useFonts} from '@expo-google-fonts/poppins'

export default function BoxInferior() {
  const[ligado,setLigado]=useState(true)

  const [loaded] = useFonts({
    Poppins_700Bold: require('../../../../node_modules/@expo-google-fonts/poppins/Poppins_700Bold.ttf'),
  });
  
  if (!loaded) {
    return null;
  }
  return(
    <View style={styles.box3}>
        <Text style={styles.text}>Adicionar</Text>
    </View>
  )
}

const styles=StyleSheet.create({
  box3:{    
    marginTop:'4%',
    marginLeft:'33%',
    width: '35%',
    height: '5%',
     backgroundColor:'#006EFF',
     justifyContent:'center',
     alignItems:'center'
  },
  text:{
    color:'#fff',
    fontSize:20,
    fontFamily:'Poppins_700Bold',
   height: '100%',
  }
})