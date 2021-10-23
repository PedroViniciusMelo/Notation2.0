import React, {useState,useEffect} from 'react';
import {
    Text,
    View,
    Switch,
    Image,
    Button,
    TouchableOpacity,
    TextInput,
    SafeAreaView,
    Modal,
    Platform
} from 'react-native';
import {ColorPicker} from 'react-native-color-picker'
import Compromissodb from '../../BancoDeDados/SQLite/Compromissodb.js'
import estilo from './estilo'
import DateTimePicker from '@react-native-community/datetimepicker'
import IconConfirmar from 'react-native-vector-icons/MaterialIcons';
import IconDeletar from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';


export default function Compromisso({route}) {

    var id = route.params?.id
    const [data2, setData2] = useState(new Date())
    const [categoria2, setCategoria2] = useState(route.params?.categoria)
    const [titulo2, setTitulo2] = useState(route.params?.titulo)
    const [descricao2, setDescricao2] = useState(route.params?.descricao)
    const [cor2,setCor2]=useState(route.params?.cor)
    const [notificar2,setNotificar2]=useState(route.params?.notificar)

    
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('datetime');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
        setMode(currentMode);
        setShow(true);
    };

     
    useEffect(() => {
        Compromissodb.update()
            .then(items=>console.log(items))
            .catch(e => console.log(e))
     }, []);
     

    const [titulo, setTitulo] = useState()
    const [categoria, setCategoria] = useState()
    const [cor, setCor] = useState('#006eff')
    const [descricao, setDescricao] = useState()
    const [notificar, setNotificar] = useState(true)
    const [visivel, setVisivel] = useState(false)
 
    function EditarBtn(){
        if(route.params){
            return(
            <View style={{flexDirection:'row'}}>
                <TouchableOpacity
                    style={estilo.botoesEditar}
                    onPress={() => { navigation.navigate('Feed')}}>
                    <IconConfirmar name="check-circle" color="white" size={30}/>
                    <Text style={estilo.tsave}>Concluir</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{...estilo.botoesEditar,...{backgroundColor:'red'}}}
                    onPress={() => {remover(id), navigation.navigate('Feed')}}>
                    <IconDeletar name="delete" color="white" size={30}/>
                    <Text style={estilo.tsave}>Apagar</Text>
                </TouchableOpacity>
            </View>
            )
        }else{
            return(
            <TouchableOpacity
                style={estilo.botao2}
                onPress={() => {dados(), navigation.navigate('Feed')}}>
                <Image style={estilo.check} source={require('../../../assets/icones/icone_check.png')}/>
                <Text style={estilo.tsave}>Salvar</Text>
            </TouchableOpacity>
            )
        }
    }
    function EditarDados(){
        if(route.params){
            return(
                <View style={estilo.editardados}>
                    <Text style={estilo.titulo}>Titulo</Text>
                    <TextInput
                        style={estilo.descricao}
                        value={titulo2}
                        placeholder="Informe o título"
                        onChangeText={(text) => setTitulo2(text)}
                        returnKeyType='go'
                    />
                    <Text style={estilo.titulo}>Categoria</Text>
                    <View style={estilo.viewimput}>
                        <TextInput
                            style={estilo.descricao3}
                            placeholder="Informe a categoria"
                            value={categoria2}
                            onChangeText={(text) => setCategoria2(text)}
                            returnKeyType='go'
                        />
                        <View style={estilo.viewbtcor}>
                            <TouchableOpacity
                                style={{...estilo.botao, ...{backgroundColor: cor2}}}
                                onPress={() => {
                                    setVisivel(true)
                                }}>
                                <Image style={estilo.imagebt}
                                    source={require('../../../assets/icones/icone_eyedrop.png')}/>
                            </TouchableOpacity>
                            <Text style={{...estilo.textcor,...{color: cor2}}}>COR</Text>
                        </View>
                    </View>
                    <View style={estilo.textview}>
                        <Text style={estilo.titulo}>Descrição</Text>
                        <Text style={estilo.subtitulo}>(Opcional)</Text>
                    </View>
                    <TextInput
                        style={estilo.descricao2}
                        placeholder="Informe a descricao"
                        value={descricao2}
                        onChangeText={(text) => setDescricao2(text)}
                        returnKeyType='go'
                        multiline={true}
                    />
                </View>
            )
        }else{
            return(
                <View style={estilo.editardados}>
                    <Text style={estilo.titulo}>Título</Text>
                    <TextInput
                        style={estilo.descricao}
                        placeholder="Informe o título"
                        onChangeText={text => setTitulo(text)}
                    />
                    <Text style={estilo.titulo}>Categoria</Text>
                    <View style={estilo.viewimput}>
                        <TextInput
                            style={estilo.descricao3}
                            placeholder="Informe a categoria"
                            onChangeText={(text) => setCategoria(text)}/>
                        <View style={estilo.viewbtcor}>
                            <TouchableOpacity
                                style={{...estilo.botao, ...{backgroundColor: cor}}}
                                onPress={() => {
                                    setVisivel(true)
                                }}>
                                <Image style={estilo.imagebt}
                                    source={require('../../../assets/icones/icone_eyedrop.png')}/>
                            </TouchableOpacity>
                            <Text style={{...estilo.textcor,...{color: cor}}}>COR</Text>
                        </View>
                    </View>
                    <View style={estilo.textview}>
                        <Text style={estilo.titulo}>Descrição</Text>
                        <Text style={estilo.subtitulo}>(Opcional)</Text>
                    </View>
                    <TextInput
                        style={estilo.descricao2}
                        placeholder="Informe a descricao"
                        onChangeText={(text) => setDescricao(text)}
                        multiline={true}
                    />
                </View>
            )
        }
    }
    function remover(id){
        Compromissodb.remove(id)
    }

    function dados() {
        Compromissodb.create({
            titulo: titulo,
            categoria: categoria,
            cor: cor,
            descricao: descricao,
            data: date.toString(),
            notificar: notificar,
            atrasado: false,
            concluida: '',
            dataConcluida: ''
        })
            .then(() => {
                alert('Adicionado com sucesso')
            })
            .catch(err => console.log(err))
    }
    const navigation=useNavigation();

    return (
        <SafeAreaView>
            <Modal
                animationType="slide"
                transparent={true}
                visible={visivel}
                onRequestClose={() => {
                    setVisivel(false)
                }}>
                <View style={estilo.colorwheel}>
                    <ColorPicker
                        onColorSelected={(color) => {
                            setCor(color)
                        }}
                        defaultColor={cor}
                        style={{flex: 1}}
                    />
                </View>
                <View style={estilo.confirmarBtnModal}>
                    <Button
                        title="Confirmar"
                        onPress={() => {
                            setVisivel(false)
                        }}
                    />
                </View>
            </Modal>
            <View style={estilo.container}>

                <EditarDados/>

                <View style={estilo.container2}>
                    <View style={estilo.data}>
                        <Image
                            style={estilo.imagecalendar}
                            source={require('../../../assets/icones/icone_calendario_2.png')}/>
                        <TouchableOpacity onPress={() => showMode('date')}>
                            <Text>{date.getDate()} / {date.getMonth()} / {date.getFullYear()}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => showMode('time')}>
                            <Text> {date.getHours()} : {date.getMinutes()}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={estilo.containernot}>
                        <Switch
                            thumbColor={'#ddd'}
                            trackColor={{false: '#c1c1c1', true: '#006eff'}}
                            value={notificar}
                            onChange={() => {
                                setNotificar(!notificar)
                            }}
                        />
                        <Text style={estilo.titulo}>Notificar</Text>
                    </View>
                    <EditarBtn/>
                </View>
            </View>
            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                />
            )}
        </SafeAreaView>
    )
}
/*

*/