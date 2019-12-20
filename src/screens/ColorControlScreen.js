import React, { useState } from 'react';
import { Text, StyleSheet, View, Button, FlatList } from 'react-native';

var vermelho = 0;
var verde = 0;
var azul = 0;

const ColorScreen = () => {

   const [muda, fazMuda] = useState(0);
   

   function mudaCor(cor, valor) { 
      if(cor === 'vermelho') {
         if((vermelho + valor) < 0 || (vermelho + valor) > 255) {
            return `rgb(${vermelho}, ${verde}, ${azul})`;
         }
         vermelho = vermelho + valor;
      }
      if(cor === 'verde') {
         if((verde + valor) < 0 || (verde + valor) > 255) {
            return `rgb(${vermelho}, ${verde}, ${azul})`;
         }
         verde = verde + valor;
      }
      if(cor === 'azul') {
         if((azul + valor) < 0 || (azul + valor) > 255) {
            return `rgb(${vermelho}, ${verde}, ${azul})`;
         }
         azul = azul + valor;
      }
      return `rgb(${vermelho}, ${verde}, ${azul})`;
   }

   return(
    <View>
      <View style={{marginTop:20, alignItems:'center'}}>
         <Text style={{fontSize:20, color:'red'}}>Vermelho ({vermelho})</Text>
      </View>
      <Button
         title="+"
         onPress={() => {
            fazMuda(muda + 1);
            mudaCor('vermelho',15);
         }}
      />
      <Button
         title="-"
         onPress={() => {
            fazMuda(muda + 1);
            mudaCor('vermelho',-15);
         }}
      />
      <View style={{alignItems:'center'}}>
         <Text style={{fontSize:20, color:'green'}}>Verde ({verde})</Text>
      </View>
      <Button
         title="+"
         onPress={() => {
            fazMuda(muda + 1);
            mudaCor('verde',15);
         }}
      />
      <Button
         title="-"
         onPress={() => {
            fazMuda(muda + 1);
            mudaCor('verde',-15);
         }}
      />
      <View style={{alignItems:'center'}}>
         <Text style={{fontSize:20, color:'blue'}}>Azul ({azul})</Text>
      </View>
      <Button
         title="+"
         onPress={() => {
            fazMuda(muda + 1);
            mudaCor('azul',15);
         }}
      />
      <Button
         title="-"
         onPress={() => {
            fazMuda(muda + 1);
            mudaCor('azul',-15);
         }}
      />
      <View style={{ height:100, backgroundColor: mudaCor(vermelho,0) }}/>
    </View>
  );
};

const styles = StyleSheet.create({});


export default ColorScreen;