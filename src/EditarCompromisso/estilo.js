import {StyleSheet} from 'react-native';

export default StyleSheet.create({
   texto: {
      color: '#000',
      fontSize: 18,
      fontWeight: 'bold'
   },
   flatlistcontainer:{
      backgroundColor:'#fff',
      borderRadius:10,
      padding: '2%',
      marginTop:'2%'
   },
   image:{
      resizeMode:'contain',
      height:25,
      width:25
   },
   flatlist:{
      flexDirection:'row',
      justifyContent:'space-between',
   },
   categoria:{
      color:'#fff',
      borderRadius:20,
      width:'45%',
      justifyContent:'center',
      alignItems:'center'
   }
})