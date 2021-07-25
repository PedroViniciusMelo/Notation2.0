import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView} from 'react-native';
import NovaAtividade from "./src/View/NovaAtividade"

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto"/>
      <NovaAtividade/>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
    marginTop:'8.5%'
  }
})