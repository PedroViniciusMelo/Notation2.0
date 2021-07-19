import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import Partesuperior from "./src/View/NovaAtividade/Partesuperior";
import BoxCentral from './src/View/NovaAtividade/Partecentral';
import {Poppins_500Medium, Poppins_700Bold, useFonts} from "@expo-google-fonts/poppins";

export default function App() {
    const [loaded] = useFonts({
        Poppins_500Medium: Poppins_500Medium,
        Poppins_700Bold: Poppins_700Bold,
    });

    if (!loaded) {
        return null;
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="light" backgroundColor='#000' transLucent={false}/>
            <Partesuperior/>
            <BoxCentral/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#F9F9F9',
        marginTop: '8.6%'
    }
})
