import React, {useEffect, useState} from 'react'
import {View,Text, TextInput,Image,FlatList} from 'react-native'
import Swiper from 'react-native-swiper'
import estilo from './estilos'
import Compromissodb from '../../BancoDeDados/SQLite/Compromissodb'
import Editar from '../../EditarCompromisso'

export default function Home() {
   const [dadosflatlist,setDadosflatlist]=useState()
   useEffect(() => {
      Compromissodb.all()
          .then((dados) => setDadosflatlist(dados))
          .catch(e => console.log(e))
   }, [dadosflatlist]);
 
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
                        <FlatList
                           data={dadosflatlist}
                           keyExtractor={item => item.id.toString()}
                           renderItem={({ item }) => 
                                 <Editar
                                    concluida={false}
                                    obj={item}
                                 />}
                        />
                     </View>
               </Swiper>
            </View>
      </View>

   )
}