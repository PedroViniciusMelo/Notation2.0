import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {Feather} from "@expo/vector-icons";
import {NavigationContainer} from "@react-navigation/native";
import Compromisso from "../View/Compromisso"
import Notas from "../View/Notas";
import Nota from "../View/Nota";
import Feed from "../View/Home/index"
import IconHome from "@expo/vector-icons/Entypo"
import IconCalendar from "@expo/vector-icons/Entypo"
import IconNotas from "@expo/vector-icons/FontAwesome5"
import IconHistorico from "@expo/vector-icons/FontAwesome5"
import IconSobre from "@expo/vector-icons/FontAwesome5"

export  default function stackCompromissoNavigator(){
    const Tab = createBottomTabNavigator();
    return (
        <NavigationContainer>
            <Tab.Navigator
                taBarOptions={{
                    style:{
                        backgroundColor:'#006EFF'
                    }
                }}
            >   
                 <Tab.Screen
                    name="Notas"
                    component={Notas}
                    options={{
                        tabBarIcon:({color,size})=>(
                          <IconNotas name="pen-alt" color={color} size={size}/>
                        )
                      }}
                />
                <Tab.Screen
                  name="Compromisso"
                  component={Compromisso}
                  options={{
                    tabBarIcon:({color,size})=>(
                      <IconCalendar name="calendar" color={color} size={size}/>
                    )
                  }}
                />
                <Tab.Screen
                    name="Feed"
                    component={Feed}
                    options={{
                      tabBarIcon:({color,size})=>(
                        <IconHome name="home" color={color} size={size}/>
                      )
                    }}
                />
                <Tab.Screen
                    name="Histórico"
                    component={Nota}
                    options={{
                        tabBarIcon:({color,size})=>(
                          <IconHistorico name="history" color={color} size={size}/>
                        )
                      }}
                />
                <Tab.Screen
                    name="Sobre"
                    component={Nota}
                    options={{
                        tabBarIcon:({color,size})=>(
                          <IconSobre name="info-circle" color={color} size={size}/>
                        )
                      }}
                />
                </Tab.Navigator>
         </NavigationContainer>
    );
}