import React, {useState}from 'react';
import { StyleSheet, Text, View,Button,Alert,Image} from 'react-native';

export default function BoxInferior() {
  const[ligado,setLigado]=useState(true)

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
