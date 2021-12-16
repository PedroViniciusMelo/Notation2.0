import React, {useState} from 'react';
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
    Platform,
    Alert
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
const [data2, setData2] = useState(new Date(route.params?.data))
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
const [titulo, setTitulo] = useState()
const [categoria, setCategoria] = useState()
const [cor, setCor] = useState('#006eff')
const [descricao, setDescricao] = useState()
const [notificar, setNotificar] = useState(true)
const [visivel, setVisivel] = useState(false)

function Data(){
    if(date.getDate()<10 && date.getMonth()<10){
        return(
            <Text style={{color:'#000',marginLeft:'5%'}}>
                0{date.getDate()} / 0{date.getMonth()} / {date.getFullYear()}
            </Text>
        )        
    }else if(date.getDate()<10 && date.getMonth()>9){
        return(
            <Text>
                0{date.getDate()} / {date.getMonth()} / {date.getFullYear()}
            </Text>
        ) 
    }else if(date.getDate()>9 && date.getMonth()<9){
        return(
            <Text>
                {date.getDate()} / {date.getMonth()} / {date.getFullYear()}
            </Text>
        ) 
    }else{
        return(
            <Text>
                {date.getDate()} / {date.getMonth()} / {date.getFullYear()}
            </Text>
        ) 
    }
}
function EditarBtn(){
    if(route.params){
        return(
        <View style={{flexDirection:'row'}}>
            <TouchableOpacity
                style={estilo.botoesEditar}
                onPress={()=>{atualizar(id), navigation.navigate('Feed')}}>
                <IconConfirmar name="check-circle" color="white" size={30}/>
                <Text style={estilo.tsave}>Concluir</Text>
                </TouchableOpacity>
            <TouchableOpacity
                style={{...estilo.botoesEditar,...{backgroundColor:'red'}}}
                onPress={() => {remover(id), navigation.navigate('Feed')} }>
                <IconDeletar name="delete" color="white" size={30}/>
                <Text style={estilo.tsave}>Apagar</Text>
            </TouchableOpacity>
        </View>
        )
    }else{
        return(
        <View style={{flexDirection:'row'}}>
            <TouchableOpacity
                style={estilo.botoesEditar2}
                onPress={Verificardado}>
                <Image style={estilo.check} source={require('../../../assets/icones/icone_check.png')}/>
                <Text style={estilo.tsave}>Salvar</Text>
            </TouchableOpacity>
        </View>
        )
    }
}
function Verificardado(){
    if(titulo&&categoria&&descricao){
        dados(),navigation.navigate('Feed')
        setTitulo('')
        setCategoria('')
        setDescricao('')
    }else{
        Alert.alert("Insira todos os dados!")
    }
}
function remover(id){
    Compromissodb.remove(id)
}
function atualizar(id){
    Compromissodb.update(
        id,{
            ...route.params,
            titulo: titulo2,
            categoria: categoria2,
            cor: cor2,
            descricao: descricao2,
            data: date.toString(),
            notificar: notificar2,
            atrasado: false,
            concluida: '',
            dataConcluida: ''
        }
    )
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
    .then()
    .catch(err => console.log(err))
}
const navigation=useNavigation();
    return (
        <SafeAreaView>
            {
                route.params?
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
                                    setCor2(color)
                                }}
                                defaultColor={cor2}
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
                :
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
            }
            <View style={estilo.container}>
                   {
                        route.params? 
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
                        :  
                        <View style={estilo.editardados}>
                            <Text style={estilo.titulo}>Título</Text>
                            <TextInput
                                style={estilo.descricao}
                                placeholder="Informe o título"
                                onChangeText={text => setTitulo(text)}
                                value={titulo}
                            />
                            <Text style={estilo.titulo}>Categoria</Text>
                            <View style={estilo.viewimput}>
                                <TextInput
                                    style={estilo.descricao3}
                                    placeholder="Informe a categoria"
                                    onChangeText={(text) => setCategoria(text)}
                                    value={categoria}
                                    />
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
                                value={descricao}
                                onChangeText={(text) => setDescricao(text)}
                                multiline={true}
                            />
                        </View>
                    }     
                <View style={estilo.container2}>
                    <View style={estilo.data}>
                        <Image
                            style={estilo.imagecalendar}
                            source={require('../../../assets/icones/icone_calendario_2.png')}/>
                        <TouchableOpacity onPress={() => showMode('date')}>      
                            <Data/>
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