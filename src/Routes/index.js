import React from "react";
import {Feather} from "@expo/vector-icons";
import {createStackNavigator} from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import Nota from "../View/Nota";
import TabInicioNavigator from "./tabInicioNavigator";
import stackCompromisso from "./stackCompromisso";
import stackNotas from "./stackNotas";
import stackHome from "./stackHome"
import Home from "../View/Home";

export default function index() {
    const {Navigator, Screen} = createStackNavigator()
    return (
        <NavigationContainer>
            <Navigator
                screenOptions={{
                    headerStyle: {backgroundColor: "#006EFF"},
                    headerTitleStyle: {color: "white", fontSize: 30, fontFamily: "Poppins_700Bold", padding: "26%"},
                }}
             >
                 <Screen
                    name="tabinicio"
                    component={TabInicioNavigator}
                    options={{headerShown:false}}
                 />
                 <Screen
                    name="Compromisso"
                    component={stackCompromisso}
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
                 <Screen
                    name="Feed"
                    component={stackHome}
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
                 <Screen
                    name="Notas"
                    component={stackNotas}
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
                 <Screen
                    name="Nota"
                    component={Nota}
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
            </Navigator>
        </NavigationContainer>
    )
}
