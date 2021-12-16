import React from "react";
import {Feather} from "@expo/vector-icons";
import {createStackNavigator} from "@react-navigation/stack";
import Nota from "../View/Nota";
import Notas from "../View/Notas";

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
                    name="Notas"
                    component={Notas}
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
    )
}
