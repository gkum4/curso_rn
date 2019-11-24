import React, { Component } from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity, Image } from 'react-native';


const HomeScreen = (props) => {
   return(
    <View style={{flex:1}}>
      <View style={{flex: 1, backgroundColor:'#FAA06D', justifyContent: 'center', alignItems: 'center'}}>
         <Text>
            Ojhfjfgjhf
         </Text>
      </View>
      <View style={{flex: 1, backgroundColor:'#AD653B', justifyContent: 'center', alignItems: 'center'}}>
         <Text>
            Hahahah
         </Text>
      </View>
      <View style={{flex: 1, backgroundColor:'blue', justifyContent: 'center', alignItems: 'center'}}>
         <Text>
            Hahahaasckzjbc
         </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20
  }
});

export default HomeScreen;
