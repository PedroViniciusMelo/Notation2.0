import React from 'react';
import { Text, View,StyleSheet, TouchableOpacity,Button,StatusBar,TextInput,Image} from 'react-native';
import estilo from './estilo'
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();


function Nota() {
 
    return(
      <View  >
        <StatusBar backgroundColor='#006EFF'/>
          <Image 
          style={{width:2,height:2}}
          source={require('../../../assets/icones/icone_opcoes.png')}/>
    
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
    <Stack.Navigator
      screenOptions={{
        headerStyle:{backgroundColor:"#006EFF"},
        headerTitleStyle:{color:"white",fontSize:30,fontFamily:"Poppins_700Bold",padding:"26%"},
        headerBackImage:{}
      }}
    >
      <Stack.Screen name="Nota" component={Nota}
        options={{
          headerLeft: () => (
            <Image   
            style={{resizeMode:"center",marginLeft:10}}
            source={require('../../../assets/icones/icone_opcoes.png')}/>
          ),
        }}
      
      
      />
    </Stack.Navigator>   

  )}

