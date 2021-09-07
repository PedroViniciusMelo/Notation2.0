import React from 'react';
import {
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_400Regular,
    Poppins_800ExtraBold
} from '@expo-google-fonts/poppins';
import {Muli_500Medium, Muli_700Bold, useFonts} from '@expo-google-fonts/muli'
import Routes from './src/Routes'

export default function App() {
    const [fontsLoaded] = useFonts({
        Poppins_600SemiBold,
        Poppins_700Bold,
        Poppins_400Regular,
        Poppins_800ExtraBold,
        Muli_500Medium,
        Muli_700Bold,
    });

    if (!fontsLoaded) {
        return null;
    }

    return <Routes/>
}
