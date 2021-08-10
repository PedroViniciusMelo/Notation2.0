import React from 'react';
import Nota from './src/View/Nota';
import Notas from './src/View/Notas';
import { createStackNavigator } from '@react-navigation/stack';
import { Feather } from '@expo/vector-icons';
import { Text, View, TouchableOpacity,StatusBar, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Poppins_600SemiBold, Poppins_700Bold, Poppins_400Regular, Poppins_800ExtraBold} from '@expo-google-fonts/poppins';
import { Muli_500Medium, Muli_700Bold,useFonts } from '@expo-google-fonts/muli'
import NovaAtividade from './src/View/NovaAtividade';


const Tab = createBottomTabNavigator();

export default function App() {

  const [fontsLoaded] = useFonts({
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_400Regular,
    Poppins_800ExtraBold,
    Muli_500Medium, 
    Muli_700Bold,
  });
  
  if (!fontsLoaded) {
      return null;
  } 
    function Stacknotas() {

      const Stack = createStackNavigator();
      return(
      <Stack.Navigator
      screenOptions={{
        headerStyle:{backgroundColor:"#006EFF"},
        headerTitleStyle:{color:"white",fontSize:30,fontFamily:"Poppins_700Bold",padding:"26%"},
      }}
    >
      <Stack.Screen name="Notas" component={Notas}
        options={{
          headerLeft: () => (
            <Feather
              name='more-vertical'
              color='white'
              size={35}
              />
          )
        }}
        />
        <Stack.Screen name="Nota" component={Nota}
        options={{
          headerLeft: () => (
            <Feather
              name='more-vertical'
              color='white'
              size={35}
              />
          )
        }}
      />
    </Stack.Navigator>
      )  
  }
  return (
      <NavigationContainer>
          <Tab.Navigator
         
          tabBarOptions={{
            style:{
              backgroundColor:"#007aff",
            },
            labelStyle: {
              fontSize: 12,
              fontFamily:"Poppins_700Bold"            
            },          
            tabStyle:{
                paddingTop:10,
                paddingBottom:4,
                
            },
            
            activeTintColor: '#FFF',
            inactiveTintColor: '#FFF',
          }}
          >
            
            <Tab.Screen  
              name="Notas"
              component = {Stacknotas}
              options={{
                tabBarIcon: () => (
                  <Image
                    style={{resizeMode:"contain",width:20,height:20}}
                    source={require('./assets/icones/icone_caneta.png')                  
                    }/>
                    ), 
                    tabBarLabel: 'Notas'             
                    }}
              />
            <Tab.Screen  
              name="Calendário"
              component = {NovaAtividade}
              options={{
                
                tabBarIcon: () => (
                  <Image
                    style={{resizeMode:"contain",width:20,height:20}}
                    source={require('./assets/icones/icone_calendario_3.png')                  
                    }/>
                    ), 
                    tabBarLabel: 'Calendário'             
                    }}
              />
              <Tab.Screen  
              name="Feed"
              component = {Nota}
              options={{
                tabBarIcon: () => (
                  <Image
                    style={{resizeMode:"contain",width:20,height:20}}
                    source={require('./assets/icones/icone_home.png')                  
                    }/>
                    ), 
                    tabBarLabel: 'Feed'             
                    }}
              />
              <Tab.Screen  
              name="Histórico"
              component = {Nota}
              options={{
                tabBarIcon: () => (
                  <Image
                    style={{resizeMode:"contain",width:20,height:20}}
                    source={require('./assets/icones/icone_historico.png')                  
                    }/>
                    ), 
                    tabBarLabel: 'Histórico'             
                    }}
              />
              <Tab.Screen  
              name="Sobre"
              component = {Nota}
              options={{
                tabBarIcon: () => (
                  <Image
                    style={{resizeMode:"contain",width:20,height:20}}
                    source={require('./assets/icones/icone_info.png')                  
                    }/>
                    ), 
                    tabBarLabel: 'Sobre'             
                    }}
              />
          </Tab.Navigator>   
        </NavigationContainer> 
 
  );
  }