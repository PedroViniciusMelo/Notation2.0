import React from 'react';
import { Text, View,StyleSheet, TouchableOpacity,StatusBar,TextInput,Image} from 'react-native';
import estilo from './estilo'




function Nota() {
 
    return(
      <View style={{flex:1}} >
        <View style= {estilo.barratopo}>
        <StatusBar backgroundColor='#006EFF'/>
          <Image 
          style={{width:2,height:2}}
          source={require('../../../assets/icones/icone_opcoes.png')}/>
          <TouchableOpacity onPress={() => alert('Tarefas acionado')}>
                <Text style={estilo.texto}>
                    Notas
                </Text> 
          </TouchableOpacity>
        </View>
        <View style={estilo.tarefas}>
              <TextInput 
                multiline
                style={{fontFamily:"Poppins_700Bold"}}
                autoCapitalize="words"
              >

              </TextInput>
        </View>
      </View>
    )
  }


export default function () {
  

  return(
      
    <Nota/>   

  )}

