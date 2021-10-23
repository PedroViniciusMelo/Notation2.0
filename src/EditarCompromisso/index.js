import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import IconConfirmar from 'react-native-vector-icons/MaterialIcons';
import IconDeletar from 'react-native-vector-icons/AntDesign';
import IconCalendario from 'react-native-vector-icons/FontAwesome5';
import IconAtencao from 'react-native-vector-icons/Entypo';
import estilo from './estilo';


export default function EditarCompromisso(props){
   const navigation = useNavigation()
   function telacompromisso(){
      navigation.navigate('Compromisso', props.obj)
   } 
   //console.log(id)
      //calendar-alt
      //warning
   return(
         <TouchableOpacity onPress={telacompromisso}>
           <View style={estilo.flatlistcontainer}>
               <View style={estilo.flatlist}>
                  <Text style={estilo.texto}>{props.obj.titulo}</Text>
                  <IconDeletar name="delete" color="red" size={30}/>
               </View>
               <View style={estilo.flatlist}>
                  <View style={{...estilo.categoria, ...{backgroundColor:props.obj.cor}}}><Text style={{color:'#fff', fontSize:12}}>{props.obj.categoria}</Text></View>
                  <IconConfirmar name="check-circle" color="green" size={30}/>
               </View>
            </View>
         </TouchableOpacity>
   
)
}