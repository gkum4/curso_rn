import React, { useState, Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';


const TextInputScreen = () => {
   const [name, setName] = useState('');
   const [nome, setNome] = useState('');
   return (
      <View>
         <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={(newValue) => {
               setName(newValue);
            }}
            value={name}
         />
         <Button
            onPress={() => {
               setNome(name);
               setName('');
            }}
            title="Submit" 
         />
         <Text>
            {nome}
         </Text>
      </View>
   );
};

const submit = () => {

};

const styles = StyleSheet.create({
   input: {
      margin: 15,
      borderColor: 'black',
      borderWidth: 1,
      fontSize: 17
   }
});

export default TextInputScreen;

