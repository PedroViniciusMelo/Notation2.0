import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity, Image} from 'react-native';
import { Foundation } from '@expo/vector-icons';
import styles from "./styles";

export default function Partesuperior() {

  return(
    <View style={styles.caixa}>
      <View>
          <TouchableOpacity>
            <Foundation name="list" size={35} color='#fff' />
          </TouchableOpacity>
      </View>
      <Text style={styles.conteudo}>Compromisso</Text>
      <View style={{width:2,height:2,backgroundColor:'#006EFF'}}>

      </View>
    </View>
  )
}


