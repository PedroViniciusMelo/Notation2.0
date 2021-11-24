import React,{useState} from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker'
import IconConfirmar from 'react-native-vector-icons/MaterialIcons';
import IconDeletar from 'react-native-vector-icons/AntDesign';
import IconCalendario from 'react-native-vector-icons/FontAwesome5';
import IconAtencao from 'react-native-vector-icons/Entypo';
import estilo from './estilo';
import Compromisso from '../View/Compromisso';

export default function EditarCompromisso(props){
   const navigation = useNavigation()
   function telacompromisso(){
      navigation.navigate('Compromisso', props.obj)
   } 

const [date, setDate] = useState(new Date(props.obj.data));
function Data(){
   if(date.getDate()<10 && date.getMonth()<10){
      return(
         <Text style={{color:'#000',marginLeft:'5%'}}>
            0{date.getDate()} / 0{date.getMonth()} / {date.getFullYear()}
         </Text>
      )        
   }else if(date.getDate()<10 && date.getMonth()>9){
      return(
         <Text style={{color:'#000',marginLeft:'4%'}}>
            0{date.getDate()} / {date.getMonth()} / {date.getFullYear()}
         </Text>
      ) 
   }else if(date.getDate()>9 && date.getMonth()<10){
      return(
         <Text style={{color:'#000',marginLeft:'4%'}}>
            {date.getDate()} / 0{date.getMonth()} / {date.getFullYear()}
         </Text>
      ) 
   }else{
      return(
         <Text style={{color:'#000',marginLeft:'4%'}}>
            {date.getDate()} / 0{date.getMonth()} / {date.getFullYear()}
         </Text>
      ) 
   }
}
return(
      <TouchableOpacity onPress={telacompromisso}>
         <View style={estilo.flatlistcontainer}>
            <View style={estilo.flatlist}>
               <Text style={estilo.texto}>{props.obj.titulo}</Text>
               <IconDeletar name="delete" color="red" size={25}/>
            </View>
            <View style={estilo.flatlist}>
               <View style={{...estilo.categoria, ...{backgroundColor:props.obj.cor}}}><Text style={{color:'#fff', fontSize:10}}>{props.obj.categoria}</Text></View>
               <View style={{width:'50%',backgroundColor:'#fff',alignItems:'center',justifyContent:'flex-end',flexDirection:'row'}}>
                  <IconAtencao name="warning" color="red" size={18}/>
                  <Data/>
               </View>
               <IconConfirmar name="check-circle" color="green" size={25}/>
            </View>
         </View>
      </TouchableOpacity>

)
}