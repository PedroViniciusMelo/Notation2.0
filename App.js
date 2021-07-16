import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,SafeAreaView} from 'react-native';
import Superior from './src/View/NovaAtividade/Partesuperior/index';
import BoxCentral from './src/View/NovaAtividade/Partecentral';
import BoxInferior from './src/View/NovaAtividade/Parteinferior';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" backgroundColor='#000' transLucent={false}/>
      <Superior/>
      <BoxCentral/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    width: '100%',
    backgroundColor:'#F9F9F9',
    marginTop:'8.6%'
  }
})