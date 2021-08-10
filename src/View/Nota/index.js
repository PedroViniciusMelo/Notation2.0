import React from 'react';
import { Text, View,StyleSheet, TouchableOpacity,KeyboardAvoidingView,StatusBar,TextInput,Image} from 'react-native';
import estilo from './estilo';
import Notas from '../Notas';
import { createStackNavigator } from '@react-navigation/stack';
import { Feather } from '@expo/vector-icons';

const Stack = createStackNavigator();


function Nota() {
 
    return(
    <View style={estilo.container}>
      <View style={estilo.conteinernota}>
        <StatusBar backgroundColor='#006EFF'/>
            <TextInput 
              style={estilo.titulo}
              underlineColorAndroid="transparent"
              placeholder="Título"
              maxLength={200}
              placeholderTextColor="grey"
              autoCapitalize="words"
            />
            <TextInput 
              style={estilo.nota}
              multiline={true}
              underlineColorAndroid="transparent"
              placeholder="Nota"
              maxLength={200}
              placeholderTextColor="grey"
              scrollEnable
              autoCapitalize="words"
            />
      </View>
    </View>

    )
  }


export default function () {
  

  return(
    <Nota/>
  )
}

