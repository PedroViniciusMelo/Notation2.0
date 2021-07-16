import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,image} from 'react-native';
import {Poppins_400Regular,Poppins_700Bold,useFonts} from '@expo-google-fonts/poppins'
import { Foundation } from '@expo/vector-icons';


export default function Retangulo() {
  const [loaded] = useFonts({
    Poppins_500Medium: require('../../../../node_modules/@expo-google-fonts/poppins/Poppins_500Medium.ttf'),
    Poppins_700Bold: require('../../../../node_modules/@expo-google-fonts/poppins/Poppins_700Bold.ttf'),
  });
  
  if (!loaded) {
    return null;
  }
  return(
    <View style={styles.caixa}>
      <View>
          <TouchableOpacity>
            <Foundation name="list" size={35} color='#fff' /> 
          </TouchableOpacity>
      </View>
      <Text style={styles.conteudo}>Compromisso</Text>     
      <View style={{width:2,height:2,backgroundColor:'#006EFF'}}></View>
    </View>
  )
}

const styles =StyleSheet.create({
  caixa:{
    width: '100%',
    height: '12.6%',
    backgroundColor:'#006EFF',
    justifyContent:'space-evenly',
    flexDirection:'row',
    alignItems:'center',
    elevation:4
  },
  conteudo:{
    color: '#fff',
    fontFamily: 'Poppins_700Bold',
    fontSize:30
  }
})