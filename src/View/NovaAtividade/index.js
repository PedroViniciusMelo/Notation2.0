import  React, { useState } from 'react';
import { Text, View, StyleSheet, Switch, Image, Button, Alert, TouchableOpacity, TextInput } from 'react-native';
import { Muli_500Medium, Muli_700Bold,useFonts } from '@expo-google-fonts/muli'

export default function NovaAtividade() {
const[ligado,setLigado]=useState(true)

const [loaded] = useFonts({
    Muli_500Medium: require('../../../node_modules/@expo-google-fonts/muli/Muli_500Medium.ttf'),
    Muli_700Bold: require('../../../node_modules/@expo-google-fonts/muli/Muli_700Bold.ttf'),
    
});
      
if (!loaded) {
    return null;
}
  return(
    <View >
        <View style={styles.top}>
            <TouchableOpacity>
                <Image style={styles.opcoes} source={require('./../../../assets/icones/icone_opcoes.png')}/>
            </TouchableOpacity>
            <Text style={styles.compromisso}>Compromisso</Text>
         </View>
        <View style={styles.mid}>
            <Text style={styles.titulo}>Título</Text>
            <TextInput style={styles.descrição} placeholder="Informe o título" onChangeText={()=>{}}/>
            <Text style={styles.titulo2}>Categoria</Text>
            <View style={styles.viewimput}>
                <TextInput style={styles.descrição2} placeholder="Informe a categoria" onChangeText={()=>{}}/>      
                <View style={styles.viewbtcor}>   
                     <View style={styles.viewbtcor2}>     
                        <TouchableOpacity style={styles.botao}>
                            <Image style={styles.imagebt} source={require('../../../assets/icones/icone_eyedrop.png')}/>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.textcor}>COR</Text>
                </View>   
            </View>   
            <View style={styles.textview}>
                <Text style={styles.textdescr}>Descrição</Text><Text style={styles.textopc}>(Opcional)</Text>
            </View> 
            <TextInput style={styles.descrição3} placeholder="Informe a descrição" onChangeText={()=>{}} multiline={true}/>
            <View style={styles.data}>
                <Image style={styles.imagecalendar} source={require('../../../assets/icones/icone_calendario_2.png')}/>
                <Text>25/07/2021 12:00</Text>
            </View>
            <View style={styles.containernot}> 
                <Switch 
                    thumbColor={ ligado ?  '#006EFF' : '#006EFF' }  
                    trackColor={{ false: '#006EFF', true: '#006EFF' }}     
                    value={true}     
                />
                <Text style={styles.textnotificar}>Notificar</Text>
            </View>
            <View style={styles.botao2}>
                <Button 
                    color='#006EFF'
                    title="Salvar"
                    onPress={()=>Alert.alert('Salvo')}
                />    
            </View>    
        </View>
        <View style={styles.continferior}>
            <View style={styles.iconesinf}>
            <TouchableOpacity><Image style={styles.iconesinf2} source={require('../../../assets/icones/icone_caneta.png')}/></TouchableOpacity>
            <TouchableOpacity><Image style={styles.iconesinf2} source={require('../../../assets/icones/icone_calendario_3.png')}/></TouchableOpacity>
            <TouchableOpacity><Image style={styles.iconesinf2} source={require('../../../assets/icones/icone_home.png')}/></TouchableOpacity>
            <TouchableOpacity><Image style={styles.iconesinf2} source={require('../../../assets/icones/icone_historico.png')}/></TouchableOpacity>
            <TouchableOpacity><Image style={styles.iconesinf2} source={require('../../../assets/icones/icone_info.png')}/></TouchableOpacity>
            </View>
            <View style={styles.texticones}>
                <Text style={styles.imageinf1}>Notas</Text>
                <Text style={styles.imageinf2}>Calendário</Text>
                <Text style={styles.imageinf3}>Feed</Text>
                <Text style={styles.imageinf4}>Histórico</Text>
                <Text style={styles.imageinf5}>Info</Text>
            </View>
        </View>
     </View>
  )
}

const styles=StyleSheet.create({
   top:{
      width: '100%',
      height: '10%',      
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      backgroundColor: '#006EEF',
},
   opcoes:{
      height: 30,
      width: 30,
      resizeMode:'contain'
},
   compromisso:{
      fontSize: 30,
      color:'#fff',
      paddingLeft: '16%',
      marginRight: '14%',
      fontFamily:'Muli_700Bold'
},
   mid:{
     width: '90.5%',
      height: '79%',
      backgroundColor: '#fff',
      elevation: 4,
      marginTop: '4%',
      marginLeft: '5%',
      borderRadius: 20
},
   titulo:{
      fontSize: 14,
      marginTop: '3%',
      marginLeft: '6%',
      lineHeight: 30,
      fontFamily:'Muli_700Bold'
},
   descrição:{
      backgroundColor: '#dcdcdc',
      borderRadius: 20,
      width: '90%',
      marginLeft: '6%', 
      fontSize: 12,
      padding:10,
      fontFamily:'Muli_500Medium'
},
   titulo2:{
      fontSize: 14,
      marginLeft: '6%',
      lineHeight: 30,
      fontFamily:'Muli_700Bold'
},
   descrição2:{
      backgroundColor: '#dcdcdc',
      borderRadius: 20,
      width: '73%',
      marginLeft: '6%', 
      fontSize: 12,
      padding: 10,
      fontFamily:'Muli_500Medium'
},
   viewimput:{
      flexDirection: 'row',
      justifyContent: 'space-between'
},
viewbtcor:{
    backgroundColor:'#fff',
    justifyContent:'center',
    alignItems:'center',
    width:50,
    height:50,
    marginRight:'4%'
},
viewbtcor2:{
      backgroundColor:'#006eff',
      width:'70%',
      height:'70%',
      justifyContent:'center',
      alignItems:'center',
      borderRadius:20
},
imagebt:{
     backgroundColor:'#006eff',
     width:25,
     height:25,
},
textcor:{
     color:'#006eff',
     fontSize:10,
     fontFamily:'Muli_500Medium'
},
botao:{
      backgroundColor: '#006eef',
      borderRadius: 40,
      width: '15%',
      justifyContent: 'center',
      alignItems: 'center',
},
    textview:{    
      flexDirection:'row',
},
   textdescr:{
      fontSize: 14,
      marginLeft: '6%',
      lineHeight: 30,
      fontFamily:'Muli_700Bold'
},
   textopc:{
      fontSize: 9,
      marginTop: '0.5%',
      lineHeight: 30,
      fontFamily:'Muli_700Bold'
},
   descrição3:{
      backgroundColor: '#dcdcdc',
      borderRadius: 20,
      width: '90%',
      height: '35%',
      marginLeft: '6%', 
      fontSize: 12,
      padding:10,
      fontFamily:'Muli_500Medium'
},
   data:{
      width: '65%',
      height: '10%',
      marginTop: '3%',
      marginLeft: '18%',
      borderWidth: 1 ,
      borderRadius: 22,
      backgroundColor: '#fff',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      flexDirection: 'row'
},
   imagecalendar:{
      width: 35,
      height: 35,
},
   containernot:{
      flexDirection:'row',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 5
},
   textnotificar:{
      fontFamily: 'Muli_700Bold',
      fontSize: 14
},
    botao2:{
      marginRight:'28%',
      marginLeft:'28%',
      backgroundColor:'#006EFF',
      borderRadius:20
},
    continferior:{
      backgroundColor:'#006EFF',
      marginTop:'2%',
      height: '8.5%',
      flexDirection:'column'
},
    iconesinf2:{
      width: 27,
      height: 27,
      flexDirection:'row'
},
   iconesinf:{
       flexDirection:'row',
       justifyContent:'space-around',
       alignItems:'center',
       marginTop:'2%'
},
  texticones:{
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
    fontFamily:'Muli_500Medium',
    fontSize:10
}, 
  texticones2:{
    fontFamily:'Muli_500Medium',
    fontSize:9,
    color:'#fff'
},
  imageinf1:{marginLeft:'-2%',color:'#fff',fontFamily:'Muli_500Medium',fontSize:9},
  imageinf2:{marginLeft:'-4%',color:'#fff',fontFamily:'Muli_500Medium',fontSize:9},
  imageinf3:{marginLeft:'-4%',color:'#fff',fontFamily:'Muli_500Medium',fontSize:9},
  imageinf4:{marginLeft:'-3%',color:'#fff',fontFamily:'Muli_500Medium',fontSize:9},
  imageinf5:{marginLeft:'-2%',color:'#fff',fontFamily:'Muli_500Medium',fontSize:9},
})