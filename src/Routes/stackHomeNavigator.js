import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {Feather} from "@expo/vector-icons";
import Feed from "../View/Home/index"

export  default function stackHomeNavigator(){
    const {Navigator, Screen} = createStackNavigator();

    return (
      <Navigator
      screenOptions={{
          headerStyle: {backgroundColor: "#006EFF"},
          headerTitleStyle: {color: "white", fontSize: 30, fontFamily: "Poppins_700Bold", padding: "26%"},
      }}
      

  >
      <Screen
          name="Feed"
          component={Feed}
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