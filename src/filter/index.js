import React, {useContext} from "react";
import {View, Text, TouchableOpacity} from 'react-native'
import MoreVertical from "react-native-vector-icons/Feather";
import Filter from  'react-native-vector-icons/Feather'
import { AuthContext } from "../contexts/auth";

export default function Header(){
   const {modal,ViewModal} = useContext(AuthContext)
    return (
        <View style={{
                backgroundColor: '#006eff',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems:'center',
                paddingTop: '0.5%',
                paddingBottom: '2.5%',
                paddingLeft:'1%',
                paddingRight:'4%'}}>
            <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
               <MoreVertical
                  size={35}
                  name={'more-vertical'}
                  color={'white'}
               />
            </TouchableOpacity>
            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 30}}>Feed</Text>
            <TouchableOpacity onPress={()=>ViewModal()}>
               <Filter
                  name="filter"
                  size={30}
                  color={'white'}
               />
            </TouchableOpacity>
            
        </View>
    );
}
