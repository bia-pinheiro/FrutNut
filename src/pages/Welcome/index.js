import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

import * as Animatable from 'react-native-animatable'

import { useNavigation } from '@react-navigation/native'

export default function Welcome() {
  const navigation = useNavigation();

  return( 
    <View style={styles.container}>

      <View style={styles.containerLogo}>
        <Animatable.Image 
        delay={300}
        animation="flipInX"
          source={require('../../assents/logo.png')}
          resizeMode='contain'
        />
      </View>

      <Text style={styles.title}>Bem vindo ao FrutNut</Text>
      <Text style={styles.secondTitle}>Faça o seu cadastro hoje mesmo</Text>

      <View style={styles.buttonContainer}>
        
        <TouchableOpacity style={styles.firstButton} onPress={() => navigation.navigate('SignIn')}>
          <Text style={styles.buttonText}>Cadastre-se</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.secondButton} onPress={() => navigation.navigate('Main')}>
          <Text style={styles.secondButtonText}>Continuar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    marginVertical: 2,
    fontSize: 30,
    color: '#FF7A00',
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 35
  },
  secondTitle: {
    fontSize: 18,
    color: '#7D7D7D',
    marginBottom: 25,
  },
  buttonContainer: {
    flexDirection: 'row',

  },
  firstButton: {
    backgroundColor: '#FF7A00',
    borderRadius: 50,
    paddingVertical: 13,
    paddingHorizontal: 15,
    marginHorizontal: 18,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
  },
  buttonText: {
    fontSize: 19,
    color: '#fff',
    fontWeight: 'bold',
  },
  secondButton:{
    backgroundColor: '#FF7A00',
    borderRadius: 50,
    paddingVertical: 8,
    paddingHorizontal: 18,
    marginHorizontal: 18,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
  },
  secondButtonText:{
    fontSize: 19,
    color: '#fff',
    fontWeight: 'bold',
  },
  containerLogo:{
    
  }
});
