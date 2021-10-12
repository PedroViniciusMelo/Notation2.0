import React from 'react'
import {View,Text, TextInput,Image} from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import Swiper from 'react-native-swiper'
import estilo from './estilos'
import Compromisso from '../Compromisso/index'

export default function Home() {
   return(
      <View style={{backgroundColor:'#fff'}}>
         <View style={estilo.top}>
               <TextInput
                  style={estilo.pesquisa}
                  placeholder="Busque informações"
               />
               <Image style={estilo.botaopesquisa}
                  source={require('../../../assets/icones/icone_busca.png')}/>
         </View>
            <View style={estilo.mid}>
               <Text style={estilo.hj}>Hoje</Text>
               <Swiper 
                  style={estilo.wrapper} 
                  showsButtons={true}
               >
                  <View style={estilo.slide1}>
                     <View style={estilo.f1}>
                        <FlatList
                           
                        />
                        
                     </View>
                  </View>
                  <View style={estilo.slide1}>
                     <Text style={estilo.text}>2</Text>
                  </View>
                  <View style={estilo.slide1}>
                     <Text style={estilo.text}>3</Text>
                  </View>
               </Swiper>

            </View>
      </View>

   )
}