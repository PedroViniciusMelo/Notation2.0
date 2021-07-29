import React from 'react';
import InputScrollView from 'react-native-input-scroll-view';
import { Text, View,StyleSheet, TouchableOpacity,Button,StatusBar,TextInput,Image} from 'react-native';
import estilo from './estilo'
import { createStackNavigator } from '@react-navigation/stack';
import { Feather } from '@expo/vector-icons';

const Stack = createStackNavigator();


function Nota() {
 
    return(
      <View style={estilo.nota}>
        <StatusBar backgroundColor='#006EFF'/>
        <InputScrollView>
            <TextInput 
              style={estilo.nota}
              multiline={true}
              underlineColorAndroid="transparent"
              placeholder="Nota"
              maxLength={200}
              placeholderTextColor="grey"
              numberOfLines={1}
              style={{fontFamily:"Poppins_700Bold"}}
              autoCapitalize="words"
            />
          </InputScrollView>
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
            <Feather
              name='more-vertical'
              color='white'
              size={35}
              />
          ),
        }}
      
      
      />
    </Stack.Navigator>   

  )}

