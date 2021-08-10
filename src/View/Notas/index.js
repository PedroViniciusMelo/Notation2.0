import React from 'react';
import InputScrollView from 'react-native-input-scroll-view';
import { Text, View,ScrollView, TouchableOpacity,Button,StatusBar,TextInput,KeyboardAvoidingView} from 'react-native';
import estilo from './estilo';
import { createStackNavigator } from '@react-navigation/stack';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';



function Notas() {

  const navigation = useNavigation()

    return(
      <View style={estilo.nota}>
        <StatusBar backgroundColor='#006EFF'/>
        <View style={estilo.barrapesquisa} >
          <TextInput style={estilo.pesquisa}
              autoCapitalize="words"
          />
          <Feather
            style={{position:"absolute",right:20}}
            name='search'
            color='#006EFF'
            size={25}
          />
        </View>
          <TouchableOpacity style={estilo.plus}
            onPress={()=>{navigation.navigate('Nota')}}
          >
            <Feather
                  name='plus'
                  color='white'
                  size={60}
                  />
          </TouchableOpacity>
      </View>
    )
  }


export default function () {

  return(
    <Notas/>
  )
}

