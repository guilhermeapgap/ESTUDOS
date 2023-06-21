import React, { useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, TextInput, StyleSheet } from 'react-native'

import {useNavigation} from '@react-navigation/native'

import { StackPromsList } from '../../routes/app.routes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';



export default function Dashboard(){
  const navigation = useNavigation<NativeStackNavigationProp<StackPromsList>>()

  const [number, setNumber] = useState('')

  async function openOrder(){
    if(number === ''){
      return
    }
    //precisa fazer a requisição e abrir a mesa e navegar para proxima tela.
    navigation.navigate('Order',{number:number, order_id:'86a5a9ba-5f0f-4f46-a9e7-5d80448e9ef7' })
  }
  return(
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Novo pedido</Text>

      <TextInput
        placeholder='Numero da mesa:'
        placeholderTextColor={'#f0f0f0'}
        style={styles.input}
        keyboardType='numeric'
        value={number}
        onChangeText={setNumber}
      />

      <TouchableOpacity style={styles.button} onPress={openOrder}>
        <Text style={styles.buttonText}> Abrir mesa </Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems:'center',
    paddignVertical: 15,
    backgroundColor: '#1d1d2e'
  },
  title:{
    fontSize: 30,
    fontWeight:'bold',
    color:'#fff',
    marginBottom: 24
  },
  input:{
    width:'90%',
    height:60,
    backgroundColor: '#101026',
    borderRadius: 4,
    paddingHorizontal: 8,
    //textAlign:'center',
    fontSize: 22,
    color: '#fff'
  },
  button:{
    width:'90%',
    height: 40,
    backgroundColor: '#3fffa3',
    borderRadius: 3,
    marginVertical: 12,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText:{
    fontSize: 18,
    color:'#101026',
    fontWeight:'bold'
  }
})

