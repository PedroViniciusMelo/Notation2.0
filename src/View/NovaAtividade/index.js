import  React, { useState, Component} from 'react';
import { Text, View, StyleSheet, Switch, Image, Button, Alert, TouchableOpacity, TextInput, SafeAreaView, Modal, Dimensions} from 'react-native';
import ColorPicker from 'react-native-wheel-color-picker'

export default function NovaAtividade () {
 const[ligado,setLigado]=useState(true)
 const[visivel,setVisivel]=useState(false)
 const[modal2,setmodal2]=useState(false)
const[ligado2,setLigado2]=useState(false)
    return(       
        <SafeAreaView >
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
                            <TouchableOpacity style={styles.botao} onPress={()=>{setVisivel(true)}}>
                                <Image style={styles.imagebt} source={require('../../../assets/icones/icone_eyedrop.png')}/>
                                <Modal
                                    animationType="slide"
                                    transparent={true}
                                    visible={visivel}
                                    onRequestClose={()=>{setVisivel(false)}}
                                >
                                 <View style={styles.colorwheel}>
                                    <ColorPicker
                                        onColorChange={(cor) => console.log(cor)}
                                        thumbSize={50}
                                        sliderSize={25}
                                        row={false}
                                    />
                                 </View>   
                                 <View style={styles.Bview}>      
                                    <Button
                                        title="Confirmar"
                                        onPress={()=>{setVisivel(false)}}
                                    />
                                  </View>
                                </Modal>
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
                        value={ligado2}    
                        onChange={()=>{setLigado2(!ligado2)}}
                    />
                    <Text style={styles.textnotificar}>Notificar</Text>
                </View>
                <View style={styles.botao2}>
                    <Button 
                        color='#006EFF'
                        title="Salvar"
                        onPress={()=>setmodal2(true)}
                    />    
                    <Modal 
                         animationType="none"
                         transparent={true}
                         visible={modal2}
                    >
                    <View style={styles.estiloviewbutton}>
                        <View style={styles.buttonview}>
                        <Button
                            color='#006eff'
                            title="Salvar"
                            onPress={()=>setmodal2(false)}
                        />
                        </View>
                        <View  style={styles.buttonview}>
                         <Button
                            color='#f00'
                            title="Cancelar"
                            onPress={()=>setmodal2(false)}
                        />
                        </View>
                    </View>
                    </Modal>

                </View>    
            </View>
         </SafeAreaView>
            
    )
        
}

const styles=StyleSheet.create({
   top:{
      marginTop:'0%',
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
      height: '86.5%',
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
      width: 27,
      height: 27
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
  colorwheel:{     
      backgroundColor:'#e5e5e5',
      paddingBottom:15,
      borderTopLeftRadius: 20,
      borderTopRightRadius:20,
      marginLeft:'2%',
      marginRight:'2%',
      height: '60%',
      marginTop:'30%',
      elevation:5
  },
  estiloviewbutton:{
        flexDirection:'row', 
        backgroundColor:'#e5e5e5',
        width:'80%',
        height:'10%',
        justifyContent:'center', 
        alignItems:'center',
        padding:10,
        marginLeft:'11%',
        marginTop:'154%', 
        borderRadius:18,
        elevation:20
    },
  buttonview:{
      width:'50%', 
      padding:10
    },
    Bview:{
        marginLeft:'2%', 
        marginRight:'2%',
        elevation:5
    }
})

