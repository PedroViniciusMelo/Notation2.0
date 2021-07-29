import { StyleSheet} from 'react-native';

export default StyleSheet.create({

    texto: {
        fontFamily:"Poppins_700Bold",
        fontSize:30,
        color:"white",
        padding:20


    },
    barratopo:{
        alignItems:'center',
        flexDirection:"row",
        shadowRadius: 10.00,
        backgroundColor: '#007aff',
        paddingLeft:23,
    },
    plus:{
        backgroundColor: '#007aff',
        borderRadius: 70,
    },
    tarefas:{
        justifyContent:"center",
        borderWidth:1,
        borderColor:"#000",
        margin:5,
        height:"84%"
    
    },
    tarefasCalendario:{
        width:300,
        borderRadius:7,
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        marginLeft:30,
        marginTop:20,
        height:80,
        backgroundColor: '#007aff',
        alignItems:"center",
        bottom:-400
    },
    data:{
        width:350,
        
    },
    container: {
        alignItems:"center",
        flexDirection:"column"
        
    },

  });