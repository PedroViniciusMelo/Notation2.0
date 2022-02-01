import React,{useState} from 'react';
import { View, Text, CheckBox, TouchableOpacity,} from 'react-native';
import Excluir from 'react-native-vector-icons/Entypo'
import AdicionarListadb from '../BancoDeDados/SQLite/addLista/AdicionarListadb';

export default function AddList(props){
const [selecionado,setSelecionado]=useState(false)

function remover(id){
   AdicionarListadb.remove(id)
}

   return(
      <View style={{backgroundColor:'#fff', flexDirection:'row', alignItems:'center', justifyContent:'space-between', borderRadius:20, paddingLeft:5,marginTop:'2%',marginLeft:'1%',marginRight:'18%'}}>
         <CheckBox
            value={selecionado}
            onValueChange={setSelecionado}
         />
         <View style={{width:'70%',marginRight:'5%'}}>
            <Text style={{fontFamily:'Poppins_700Bold'}}>{props.obj.titulo}</Text>
         </View>
         <TouchableOpacity onPress={()=>remover(props.obj.id)}>
            <Excluir
               name='squared-minus'
               color={'red'}
               size={30}
               style={{marginRight:'5%'}}
            />
         </TouchableOpacity>
      </View>

)
}