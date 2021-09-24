import React, {useState} from 'react';
import {Text, View, Switch, Image, Button, TouchableOpacity, TextInput, SafeAreaView, Modal,Platform, Alert} from 'react-native';
import {ColorPicker} from 'react-native-color-picker'
import Compromissodb from '../../BancoDeDados/SQLite/Compromissodb.js'
import estilo from './estilo'
import DateTimePicker from '@react-native-community/datetimepicker';


export default function Compromisso() {

    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
  
    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate || date;
      setShow(Platform.OS === 'ios');
      setDate(currentDate);
    };
    const showMode = (currentMode) => {
      setShow(true);
      setMode(currentMode);
    };
    const showDatepicker = () => {
      showMode('date');
    };
    const showTimepicker = () => {
      showMode('Time');
    };

    const [titulo, setTitulo] = useState('')
    const [categoria, setCategoria] = useState()
    const [cor, setCor] = useState('#006eff')
    const [descricao, setDescricao] = useState()

    const [visivel, setVisivel] = useState(false)
    const [visivel2, setVisivel2] = useState(false)
    const [notificar, setNotificar] = useState(true)

    function dados() {
        Compromissodb.create({
            titulo: titulo,
            categoria: categoria,
            cor: cor,
            descricao: descricao,
            data: date,
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
                    placxt={(text) => setTitulo(text)}/>
                <Text style={estilo.titulo}>Categoria</Text>
                <View style={estilo.viewimput}>
                    <TextInput
                        style={estilo.descricao}
                        placeholder="Informe a categoria"
                        onChangeText={(text) => setCategoria(text)}/>
                    <View style={estilo.viewbtcor}>eholder="Informe o título"
                    onChangeTe
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
                    <TouchableOpacity onPress={()=>{setVisivel2(true)}} style={estilo.data}>
                        <Image
                            style={estilo.imagecalendar}
                               source={require('../../../assets/icones/icone_calendario_2.png')}/>
                        <Text>25/07/2021 | 12:00</Text>
                    </TouchableOpacity>
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
                        style={estilo.botao2}>
                            <Image style={estilo.check} source={require('../../../assets/icones/icone_check.png')}/>
                            <Text style={estilo.tsave}>Salvar</Text>
                            
                    </TouchableOpacity>
                </View>
            </View>
            <Modal 
                     animationType="slide"
                     transparent={true}
                     visible={visivel2}
                     onRequestClose={() => {
                         setVisivel2(false)
                     }}
                >
            <View>
                <View style={estilo.conteinerdatepicker}>
                    <View style={estilo.datepicker}>
                        <Button onPress={showDatepicker} title="Selecione a data!" />
                        </View>
                        <View style={estilo.datepicker}>
                        <Button onPress={showTimepicker} title="Selecione o horário!" />
                        </View>
                        <View style={estilo.datepicker}>
                        <Button onPress={()=>{setVisivel2(false)}} title="Confirmar"/>
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
                    </View>

            </Modal>
        </SafeAreaView>
    )
}