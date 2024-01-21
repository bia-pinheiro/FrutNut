import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons'

export default function Main() {
  const navigation = useNavigation();


  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'FrutNut',
      headerTitleAlign: 'center',
      headerStyle: {
        backgroundColor: '#FF7A00',
        
      },
      headerTintColor: '#fff',

      headerRight: () => (
        <TouchableOpacity style={styles.iconContainer}>
          <MaterialIcons name="shopping-cart" size={24} color="#fff" />
        </TouchableOpacity>
      ),
      
    });
  }, [navigation]);
 
 return (
  <ScrollView>

   <View style={styles.container}>

    <TouchableOpacity style={styles.firstButton}>
    
      <Text style={styles.firstButtonText}>Destaques</Text>
    </TouchableOpacity>

    <View style={styles.productContainer}>
      <View style={styles.productItem}>
        <Image 
          source={require('../../assents/suco.png')}
          style={styles.image}
        />
        <Text style={styles.productName}>Suco de Laranja</Text>
        <Text style={styles.productPrice}>R$ 4.99</Text>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.textAddButton}>Adicionar ao carrinho</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.productItem}>
        <Image
          source={require('../../assents/refrigerante.png')}
          style={styles.image}
        />
        <Text style={styles.productName}>Refrigerante</Text>
        <Text style={styles.productPrice}>R$ 6.45</Text>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.textAddButton}>Adicionar ao carrinho</Text>
        </TouchableOpacity>
      </View>
    </View>

    <TouchableOpacity style={styles.secondButton}>
      <Text style={styles.secondButtonText}>Promoção</Text>
    </TouchableOpacity>

    <View style={styles.productContainer}>
      <View style={styles.productItem}>
        <Image 
          source={require('../../assents/feijao.png')}
          style={styles.image}
        />
        <Text style={styles.productName}>Feijão</Text>
        <Text style={styles.productPrice}>R$ 5.00</Text>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.textAddButton}>Adicionar ao carrinho</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.productItem}>
        <Image
          source={require('../../assents/arroz.png')}
          style={styles.image}
        />
        <Text style={styles.productName}>Arroz</Text>
        <Text style={styles.productPrice}>R$ 20.99</Text>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.textAddButton}>Adicionar ao carrinho</Text>
        </TouchableOpacity>
      </View>
    </View>

    <TouchableOpacity style={styles.thirdButton}>
      <Text style={styles.thirdButtonText}>Populares</Text>
    </TouchableOpacity>

    <View style={styles.productContainer}>
      <View style={styles.productItem}>
        <Image 
          source={require('../../assents/sorvete.png')}
          style={styles.image}
        />
        <Text style={styles.productName}>Sorvete</Text>
        <Text style={styles.productPrice}>R$ 17.50</Text>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.textAddButton}>Adicionar ao carrinho</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.productItem}>
        <Image
          source={require('../../assents/nutella.png')}
          style={styles.image}
        />
        <Text style={styles.productName}>Nutella</Text>
        <Text style={styles.productPrice}>R$ 10.00</Text>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.textAddButton}>Adicionar ao carrinho</Text>
        </TouchableOpacity>
      </View>
    </View>

    <TouchableOpacity style={styles.fourthButton}>
      <Text style={styles.fourthButtonText}>hortifrúti</Text>
    </TouchableOpacity>

    <View style={styles.productContainer}>
      <View style={styles.productItem}>
        <Image 
          source={require('../../assents/cenoura.png')}
          style={styles.image}
        />
        <Text style={styles.productName}>Cenoura</Text>
        <Text style={styles.productPrice}>R$ 3.50</Text>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.textAddButton}>Adicionar ao carrinho</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.productItem}>
        <Image 
          source={require('../../assents/tomate.png')}
          style={styles.image}
        />
        <Text style={styles.productName}>Tomate</Text>
        <Text style={styles.productPrice}>R$ 5.00</Text>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.textAddButton}>Adicionar ao carrinho</Text>
        </TouchableOpacity>
      </View>
    </View>
   </View>
   </ScrollView>
  );
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  firstButton:{
    backgroundColor: '#D9DBDA',
    marginTop: 21,
    marginBottom: 21,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginHorizontal: 16,
    borderRadius: 50,
    width: 360,
    elevation: 8
  },
  firstButtonText:{
    color: '#5E5656',
    fontSize: 17,
    fontWeight: 'bold',
    marginHorizontal: 120,
    fontWeight: 'bold'
  },
  secondButton:{
    backgroundColor: '#D9DBDA',
    marginTop: 21,
    marginBottom: 21,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginHorizontal: 16,
    borderRadius: 50,
    width: 360,
    elevation: 8
  },
  secondButtonText:{
    color: '#5E5656',
    fontSize: 17,
    fontWeight: 'bold',
    marginHorizontal: 120,
    fontWeight: 'bold'
  },
  thirdButton:{
    backgroundColor: '#D9DBDA',
    marginTop: 21,
    marginBottom: 21,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginHorizontal: 16,
    borderRadius: 50,
    width: 360,
    elevation: 8
  },
  thirdButtonText:{
    color: '#5E5656',
    fontSize: 17,
    fontWeight: 'bold',
    marginHorizontal: 120,
    fontWeight: 'bold'
  },
  fourthButton:{
    backgroundColor: '#D9DBDA',
    marginTop: 21,
    marginBottom: 21,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginHorizontal: 16,
    borderRadius: 50,
    width: 360,
    elevation: 8
  },
  fourthButtonText:{
    color: '#5E5656',
    fontSize: 17,
    fontWeight: 'bold',
    marginHorizontal: 120,
    fontWeight: 'bold'
  },
  productContainer:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  productItem: {
    alignItems: 'center',
  },
  image:{
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  productName:{
    fontSize: 16,
    fontWeight: 'bold',
  },
  productPrice:{
    fontSize: 15,
    color: '#888',
    marginBottom: 25,
  },
  addButton:{
    backgroundColor: '#FF8514',
    marginTop: 21,
    marginBottom: 21,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginHorizontal: 16,
    borderRadius: 50,
    width: 140,
    elevation: 15
  },
  textAddButton:{
  color: '#fff',
  fontSize: 14,
  fontWeight: 'bold' 
 },
});




