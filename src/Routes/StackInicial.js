import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {Image} from "react-native";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Feather} from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import StackNotasNavigator from "./stackNotasNavigator";
import StackHomeNavigator from "./stackHomeNavigator"
import StackCompromissoNavigator from "./stackCompromissoNavigator";
import Nota from "../View/Nota";
import Notas from "../View/Notas";
import Feed from "../View/Home/index"
import stackNotasNavigator from "./inicio";
import Compromisso from "../View/Compromisso"

export default function index() {
    const {Navigator, Screen} = createStackNavigator()
    return (
                <Navigator
                     screenOptions={{
                        headerStyle: {backgroundColor: "#006EFF"},
                        headerTitleStyle: {color: "white", fontSize: 30, fontFamily: "Poppins_700Bold", padding: "26%"},
                    }}
                    >
                    <Screen
                        name="Compromisso"
                        component={Compromisso}
                    />
                </Navigator>
    )
}