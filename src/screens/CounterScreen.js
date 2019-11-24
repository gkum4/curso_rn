import React, { useState } from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity, Image } from 'react-native';



const CounterScreen = () => {

   const [counter, setCounter] = useState(0);

   function add() {
      if(counter >= 1)
      {
         return;
      }
      setCounter(counter+0.1);
      console.log();
   }
      
   function subtract() {
      if(counter <= 0)
      {
         return;
      }
      setCounter(counter-0.1);
   }
   
   return(
    <View>
      <Text style={styles.textTitle} >
        Dae, tu ta na tela de counter!
      </Text>
      <Button
         onPress={add}
         title="Increase" 
      />
      <Button
         onPress={subtract}
         title="Decrease" 
      />
      <Text style={styles.textCouter} align="center">
         Current Count:
      </Text>
      <Image
         source={require('../../assets/voceRateou.jpg')}
         style={{opacity:counter, width:300, height:300}}
      />

    </View>
  );
};

const styles = StyleSheet.create({
   textTitle: {
      fontSize: 25
   },
   textCouter: {
      fontSize: 15
   },
   textNumber: {
      fontSize: 40
   }
});
/*<Text style={styles.textNumber} > 
         {counter}
      </Text>*/

export default CounterScreen;