import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Nota from "../View/Nota";
import IconHome from "@expo/vector-icons/Entypo"
import IconCalendar from "@expo/vector-icons/Entypo"
import IconNotas from "@expo/vector-icons/FontAwesome5"
import IconHistorico from "@expo/vector-icons/FontAwesome5"
import IconSobre from "@expo/vector-icons/FontAwesome5"
import stackCompromisso from "./stackCompromisso";
import stackNotas from "./stackNotas";
import stackHome from "./stackHome"

export default function TabInicioNavigator() {
    
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator 
            taBarOptions={{
                style: {
                    backgroundColor: '#006EFF',
                }
            }}
        >
            <Tab.Screen
                name="Notas"
                component={stackNotas}         
                options={{
                    tabBarIcon: ({color, size}) => (
                        <IconNotas name="pen-alt" color={color} size={size}/>
                    )
                }}
            />
            <Tab.Screen
                name='Compromisso'
                component={stackCompromisso}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <IconCalendar name="calendar" color={color} size={size}/>
                    )
                }}
            />
            <Tab.Screen
                name="Feed"
                component={stackHome}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <IconHome name="home" color={color} size={size}/>
                    )
                }}
            />
            <Tab.Screen
                name="Histórico"
                component={Nota}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <IconHistorico name="history" color={color} size={size}/>
                    )
                }}
            />
            <Tab.Screen
                name="Sobre"
                component={Nota}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <IconSobre name="info-circle" color={color} size={size}/>
                    )
                }}
            />
        </Tab.Navigator>
    );
}
