import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {Image} from "react-native";
import Compromisso from "../View/Compromisso";
import Nota from "../View/Nota";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import StackNotasNavigator from "./stackNotasNavigator";

export default function index() {
    let {Navigator, Screen} = createBottomTabNavigator()
    return (
        <NavigationContainer>
            <Navigator
                tabBarOptions={{
                    style: {
                        backgroundColor: "#007aff",
                    },
                    labelStyle: {
                        fontSize: 12,
                        fontFamily: "Poppins_700Bold"
                    },
                    tabStyle: {
                        paddingTop: 10,
                        paddingBottom: 4,

                    },

                    activeTintColor: '#FFF',
                    inactiveTintColor: '#FFF',
                }}>

                <Screen
                    name="Notas"
                    component={StackNotasNavigator}
                    options={{
                        tabBarIcon: () => (
                            <Image
                                style={{resizeMode: "contain", width: 20, height: 20}}
                                source={require('../../assets/icones/icone_caneta.png')
                                }/>
                        ),
                        tabBarLabel: 'Notas'
                    }}
                />
                <Screen
                    name="Calendário"
                    component={Compromisso}
                    options={{

                        tabBarIcon: () => (
                            <Image
                                style={{resizeMode: "contain", width: 20, height: 20}}
                                source={require('../../assets/icones/icone_calendario_3.png')
                                }/>
                        ),
                        tabBarLabel: 'Calendário'
                    }}
                />
                <Screen
                    name="Feed"
                    component={Nota}
                    options={{
                        tabBarIcon: () => (
                            <Image
                                style={{resizeMode: "contain", width: 20, height: 20}}
                                source={require('../../assets/icones/icone_home.png')
                                }/>
                        ),
                        tabBarLabel: 'Feed'
                    }}
                />
                <Screen
                    name="Histórico"
                    component={Nota}
                    options={{
                        tabBarIcon: () => (
                            <Image
                                style={{resizeMode: "contain", width: 20, height: 20}}
                                source={require('../../assets/icones/icone_historico.png')
                                }/>
                        ),
                        tabBarLabel: 'Histórico'
                    }}
                />
                <Screen
                    name="Sobre"
                    component={Nota}
                    options={{
                        tabBarIcon: () => (
                            <Image
                                style={{resizeMode: "contain", width: 20, height: 20}}
                                source={require('../../assets/icones/icone_info.png')
                                }/>
                        ),
                        tabBarLabel: 'Sobre'
                    }}
                />
            </Navigator>
        </NavigationContainer>
    );
}
