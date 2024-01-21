import React, { useState } from 'react';
import { useLayoutEffect } from 'react'; 
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';

import * as Animatable from 'react-native-animatable';

import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export default function SignIn() {
  const navigation = useNavigation();
  const [inputValue, setInputValue] = useState('');

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Cadastro',
      headerTitleAlign: 'center',  
      headerStyle: {
        backgroundColor: '#FF7A00',
      },
      headerTintColor: '#fff',
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>FrutNut</Text>
      <Text style={styles.text}>Cadastre-se para mais promoções</Text>

      <View style={styles.inputContainer}>
        < MaterialIcons name="person" size={24} color="#000" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder='Digite seu nome'
          value={inputValue}
          onChangeText={(text) => setInputValue(text)}
          
        />

        <MaterialIcons name="mail" size={24} color="#000" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder='Digite seu email'
          value={inputValue}
          onChangeText={(text) => setInputValue(text)}
          
        />

        <MaterialIcons name="lock" size={24} color="#000" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder='Digite sua senha'
          value={inputValue}
          onChangeText={(text) => setInputValue(text)}
          
        />

        <MaterialIcons name="note" size={24} color="#000" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder='Digite seu CPF'
          value={inputValue}
          onChangeText={(text) => setInputValue(text)}
        />
      </View>

        
        <TouchableOpacity style={styles.forgotButton}>
          <Text style={styles.forgotText}>Esqueci minha senha</Text>
        </TouchableOpacity>

        <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>
        <Text style={styles.or}>OU</Text>

        <TouchableOpacity style={styles.buttonGoogle}>
          <Text style={styles.textButtonGoogle}>Entrar com Google</Text>
          <FontAwesome name="google" size={24} color="black" style={styles.iconGoogle} />
        </TouchableOpacity>

        <Text style={styles.sigUp}>Ainda não possui uma conta? Cadastre-se</Text>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    color: '#FF7A00',
    fontSize: 36,
    fontWeight: 'bold',
    paddingHorizontal: 140,
    marginTop: 13,
  },
  text: {
    fontSize: 21,
    marginHorizontal: 26,
    marginTop: 36,
    marginBottom: 20, 
    color: '#FF7A00',
    fontWeight: 'bold',
  },
  inputContainer: {
    marginBottom: 20,
  },
  icon: {
   marginHorizontal: 23,
    top: 48
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#5B5959',
    paddingVertical: 8,    
    marginRight: 16,
    marginLeft: 52,
  },
  forgotButton:{
    alignSelf: 'flex-end',
    marginHorizontal: 16,
  },
  forgotText:{
    color: '#8D8989'
  },
  buttonContainer:{
    flex: 1,
    justifyContent: 'center',
    marginBottom: '43%'
  },
  button:{
    backgroundColor: '#FF7A00',
    height: 49,
    alignItems: 'center',
    borderRadius: 34,
    paddingVertical: 15,
    paddingHorizontal: 40,
    justifyContent: 'center',
  },
  buttonText:{
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  or:{
    paddingHorizontal: 168,
    marginTop: 24,
    marginBottom: 26
  },
  buttonContainer:{
   marginRight: 16,
   marginLeft: 20,
   marginTop: 43
  },
  buttonGoogle:{
    backgroundColor: '#D9DBDA',
    height: 49,
    alignItems: 'center',
    borderRadius: 34,
    paddingVertical: 15,
    paddingHorizontal: 40,
    justifyContent: 'center', 
  },
  textButtonGoogle:{
    fontWeight: 'bold'
  },
  iconGoogle:{
    position: 'absolute',
    left: 95,
  },
  sigUp:{
    left: 50,
    top: 24,
    fontWeight: 14
  }
});


