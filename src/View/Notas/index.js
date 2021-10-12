import React from 'react';
import {View, TouchableOpacity, StatusBar, TextInput} from 'react-native';
import estilo from './estilo';
import {Feather} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';

function Notas() {
    const navigation = useNavigation()
    return (
        <View style={estilo.nota}>
            <StatusBar backgroundColor='#006EFF'/>
            <View style={estilo.barrapesquisa}>
                <TextInput
                    style={estilo.pesquisa}
                    autoCapitalize="words"
                />
                <Feather
                    style={estilo.btnBusca}
                    name='search'
                    color='#006EFF'
                    size={25}
                />
            </View>
            <TouchableOpacity
                style={estilo.plus}
                onPress={() => {
                    navigation.navigate('Nota')
                }}>
                <Feather
                    name='plus'
                    color='white'
                    size={60}
                />
            </TouchableOpacity>
        </View>
    )
}

export default function () {

    return (
        <Notas/>
    )
}

