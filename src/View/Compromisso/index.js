import React, {useState, useEffect} from 'react';
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
import {useNavigation} from '@react-navigation/native';

export default function Compromisso() {
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('datetime');
    const [show, setShow] = useState(false);

    useEffect(() => {
        Compromissodb.all()
            .then(items => console.log(items))
            .catch(e => console.log(e))
    }, []);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
        setMode(currentMode);
        setShow(true);
    };

    const [titulo, setTitulo] = useState('')
    const [categoria, setCategoria] = useState()
    const [cor, setCor] = useState('#006eff')
    const [descricao, setDescricao] = useState()
    const [notificar, setNotificar] = useState(true)
    const [visivel, setVisivel] = useState(false)
 
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
            <View style={estilo.top}>
                <TouchableOpacity>
                    <Image
                        style={estilo.opcoes}
                        source={require('./../../../assets/icones/icone_opcoes.png')}/>
                </TouchableOpacity>
                <Text style={estilo.compromisso}>compromisso</Text>
            </View>
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
                <Text style={estilo.titulo}>Título</Text>
                <TextInput
                    style={estilo.descricao}
                    placxt={(text) => setTitulo(text)}
                    placeholder="Informe o título"
                    onChangeText={text => setTitulo(text)}
                />
                <Text style={estilo.titulo}>Categoria</Text>
                <View style={estilo.viewimput}>
                    <TextInput
                        style={estilo.descricao}
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
                        <Text style={estilo.textcor}>COR</Text>
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
                    multiline/>
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
                    <TouchableOpacity
                        style={estilo.botao2}
                        onPress={() => {dados(), navigation.navigate('Feed')}}>
                        <Image style={estilo.check} source={require('../../../assets/icones/icone_check.png')}/>
                        <Text style={estilo.tsave}>Salvar</Text>
                    </TouchableOpacity>
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