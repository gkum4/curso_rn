import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageDetail from '../components/ImageDetail'


const ImageScreen = () => {
   return (
      <View>
         <ImageDetail 
            title="Cidade"
            image={require('../../assets/cidadeImagem.jpg')}
            id='12349872'
         />
         <ImageDetail
            title="Floresta" 
            image={require('../../assets/florestaImagem.jpg')} 
            id='29348234'
         />
         <ImageDetail 
            title="Praia" 
            image={require('../../assets/praiaImagem.jpeg')} 
            id='98342654'
         />
         <ImageDetail 
            title="Montanha" 
            image={require('../../assets/montanhaImagem.jpg')} 
            id='9324238761'
         />
      </View>
   );
}

const styles = StyleSheet.create({});

export default ImageScreen;