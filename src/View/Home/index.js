import React, {useEffect, useState, useContext} from 'react'
import {View, Text, TextInput, Image, FlatList, KeyboardAvoidingView, Modal, Pressable, Alert} from 'react-native'
import Swiper from 'react-native-swiper'
import estilo from './estilos'
import Compromissodb from '../../BancoDeDados/SQLite/Compromissodb'
import Editar from '../../EditarCompromisso'
import AddList from '../../AdicionarAtividade'
import Fab from './Botao'
import AdicionarListadb from '../../BancoDeDados/SQLite/addLista/AdicionarListadb'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {AuthContext} from '../../contexts/auth'

export default function Home() {
   const [dadosflatlist,setDadosflatlist]=useState()
   const [dadoslist,setDadoslist]=useState()
   const [att,setAtt]=useState()
   const [Vmodal,setVmodal]=useState(false)
   const {modal,ViewModal,FecharModal} = useContext(AuthContext)

   // useEffect(() => {
   //    Compromissodb.all()
   //        .then((dados) => setDadosflatlist(dados))
   //        .catch(e => console.log(e))
   //  }, [dadosflatlist]);

   //  useEffect(() => {
   //    AdicionarListadb.all()
   //       .then((dados) => setDadoslist(dados))
   //       .catch(e => console.log(e))
   // }, [dadoslist]);

    function Listadb() {
      AdicionarListadb.create({
          titulo: att
      })
      .then()
      .catch(err => console.log(err))
  }

   return(
      <View style={{backgroundColor:'#fff',flex:1}}>
         <Modal
            animationType="fade"
            transparent={true}
            visible={modal}
            onRequestClose={() => FecharModal()}
         >
            <View style={{height:'26%',width:'41%',backgroundColor:'#fff',borderRadius:15,marginLeft:'57%',marginTop:'13%',elevation:5,alignItems:'stretch',justifyContent:'space-evenly',paddingVertical:'4%'}}>
               <Pressable style={({pressed}) => [{
                  backgroundColor: pressed ? '#ccc' : '#fff',
                  flexDirection:'row',
                  height:'25%',
                  alignItems:'center'
               }]} onPressOut={() => FecharModal()}>
                  <FontAwesome5 name='calendar-alt' color={'gray'} size={25} style={{marginLeft:'5%'}}/>
                  <Text style={{height:'100%',width:'75%',textAlign:'center',color:'gray',textAlignVertical:'center'}}>Data</Text>
               </Pressable>
               <View style={{width:'100%',borderWidth:0.5,borderColor:'#000'}}></View>
               <Pressable style={({pressed}) => [{
                  backgroundColor: pressed ? '#c1c1c1' : '#fff',
                  flexDirection:'row',
                  height:'25%',
                  alignItems:'center'
               }]} onPressOut={() => FecharModal()}>
                  <FontAwesome5 name='calendar-times' color={'gray'} size={25} style={{marginLeft:'5%'}}/>
                  <Text style={{height:'100%',width:'75%',textAlign:'center',color:'gray',textAlignVertical:'center'}}>Atrasada</Text>
               </Pressable>
               <View style={{width:'100%',borderWidth:0.5,borderColor:'#000'}}></View>
               <Pressable style={({pressed}) => [{
                  backgroundColor: pressed ? '#ccc' : '#fff',
                  flexDirection:'row',
                  height:'25%',
                  alignItems:'center'
               }]} onPressOut={() => FecharModal()}>
                  <Ionicons name='copy-outline' color={'gray'} size={25} style={{marginLeft:'5%'}}/>
                  <Text style={{height:'100%',width:'75%',textAlign:'center',color:'gray',textAlignVertical:'center'}}>Categoria</Text>
               </Pressable>
               <View style={{width:'100%',borderWidth:0.5,borderColor:'#000'}}></View>
               <Pressable style={({pressed}) => [{
                  backgroundColor: pressed ? '#ccc' : '#fff',
                  flexDirection:'row',
                  height:'25%',
                  alignItems:'center'
               }]} onPressOut={() => FecharModal()}>
                  <Ionicons name='refresh' color={'gray'} size={25} style={{marginLeft:'5%'}}/>
                  <Text style={{height:'100%',width:'75%',textAlign:'center',color:'gray',textAlignVertical:'center'}}>Padrão</Text>
               </Pressable>
            </View>
         </Modal>
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
                                 />
                              }
                        />
                  </View>
               </Swiper>
            </View>
            <View style={estilo.bot}>
               <Text style={estilo.atividades}>Atividades</Text>
               <KeyboardAvoidingView style={estilo.boxFlatlist}>
                  <TextInput
                     style={estilo.imputLista}
                     placeholder="+ Inserir na lista"
                     onChangeText={(text) => setAtt(text)}
                     onSubmitEditing={Listadb}
                  />
                  <FlatList
                     data={dadoslist}
                     keyExtractor={item=>item.id}
                     renderItem={({ item }) => 
                           <AddList
                              obj={item}
                           />
                     }
                  />
               </KeyboardAvoidingView>
            <Fab/>
            </View>
      </View>
   )
}