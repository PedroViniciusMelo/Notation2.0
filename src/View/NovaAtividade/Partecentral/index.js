import React, {useState} from 'react';
import {StyleSheet, Text, View, Switch, Image} from 'react-native';

export default function BoxCentral() {
    const [ligado, setLigado] = useState(true)

    return (
        <View style={styles.box}>
            <Text style={styles.TextTarefa}>Titulo</Text>
            <Text style={styles.TextTarefa2}>Informe o título</Text>
            <View style={{width: '80%', height: 1, backgroundColor: '#000', marginLeft: '6%',}}>

            </View>
            <Text style={styles.TextTarefa3}>Categoria</Text>
            <Text style={styles.TextTarefa4}>Informe a categoria</Text>
            <View style={{width: '80%', height: 1, backgroundColor: '#000', marginLeft: '6%',}}>

            </View>
            <Text style={styles.TextTarefa5}>Descrição<Text style={styles.TextTarefa6}>(Opcional)</Text></Text>
            <View style={styles.box2}>
                <Text style={styles.TextTarefa7}>Descrição</Text>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
                <Switch/>
                <Text style={styles.TextTarefa10}>Notificar</Text>
            </View>
            <View style={styles.box4}>
                <Text style={styles.text}>Adicionar</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        width: '86.4%',
        height: '82%',
        backgroundColor: '#fff',
        elevation: 4,
        marginTop: '5.1%',
        marginLeft: '6.8%',
        borderRadius: 20
    },
    TextTarefa: {
        fontFamily: 'Poppins_700Bold',
        fontSize: 20,
        marginTop: '3%',
        marginLeft: '4%',
        lineHeight: 30
    },
    TextTarefa2: {
        fontFamily: 'Poppins_500Medium',
        fontSize: 16,
        marginTop: '0%',
        marginLeft: '7%',
        lineHeight: 30,
        color: '#999990'
    },
    TextTarefa3: {
        fontFamily: 'Poppins_700Bold',
        fontSize: 20,
        marginTop: '4%',
        marginLeft: '4%',
        lineHeight: 30
    },
    TextTarefa4: {
        fontFamily: 'Poppins_500Medium',
        fontSize: 16,
        marginTop: '0%',
        marginLeft: '7%',
        lineHeight: 30,
        color: '#999990'
    },
    TextTarefa5: {
        fontFamily: 'Poppins_700Bold',
        fontSize: 20,
        marginTop: '7%',
        marginLeft: '4%',
        lineHeight: 30,
    },
    TextTarefa6: {
        fontFamily: 'Poppins_500Medium',
        fontSize: 12,
        color: '#999990',
    },
    box2: {
        width: '90%',
        height: '27.3%',
        backgroundColor: '#fff',
        borderColor: '#000',
        borderRadius: 8,
        marginTop: '2%',
        marginLeft: '4%',
        borderWidth: 0.5
    },
    TextTarefa7: {
        fontFamily: 'Poppins_500Medium',
        fontSize: 16,
        color: '#999990',
        marginLeft: '2%',
    },
    TextTarefa8: {
        fontFamily: 'Poppins_700Bold',
        fontSize: 20,
        marginTop: '4%',
        marginLeft: '4%',
        lineHeight: 30,
    },
    box3: {
        width: '85%',
        height: '5.5%',
        backgroundColor: '#006EFF',
        marginTop: '0%',
        marginLeft: '5%',
    },
    TextTarefa9: {
        color: '#fff',
        fontFamily: 'Poppins_500Medium',
        fontSize: 20,
        lineHeight: 30,
    },
    TextTarefa10: {
        color: '#000',
        fontFamily: 'Poppins_500Medium',
        fontSize: 20,
        lineHeight: 30,

    },
    box4: {
        marginTop: '4%',
        marginLeft: '33%',
        width: '35%',
        height: '5%',
        backgroundColor: '#006EFF',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: '#fff',
        fontSize: 20,
        fontFamily: 'Poppins_700Bold',
        height: '100%',
    }
})
