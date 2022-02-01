import React from "react";
import {Feather} from "@expo/vector-icons";
import {createStackNavigator} from "@react-navigation/stack";
import Compromisso from "../View/Compromisso"
import Feed from "../View/Home"
import Header from '../filter'

export default function stackHome() {
    const {Navigator, Screen} = createStackNavigator()
    return (
            <Navigator
                screenOptions={{
                    headerStyle: {backgroundColor: "#006EFF"},
                    headerTitleStyle: {color: "white", fontSize: 30, fontFamily: "Poppins_700Bold",padding:"26%"}
                }}
             >
                <Screen
                  name="Feed"
                  component={Feed}
                  options={{
                    header: () => {
                        return <Header/>
                    },
                  }}
                />
                <Screen
                    name="Compromisso"
                    component={Compromisso}
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
