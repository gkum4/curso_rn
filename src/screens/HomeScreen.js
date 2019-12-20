import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';


const HomeScreen = (props) => {
  return(
    <View>
      <Text style={styles.text}>
        Welcomeeeeee!
      </Text>
      <Button
        onPress={() => props.navigation.navigate('Activity1')}
        title="Go to Activity 1 Screen" 
      />
      <Button
        onPress={() => props.navigation.navigate('Activity2')}
        title="Go to Activity 2 Screen" 
      />
      <Button
        onPress={() => props.navigation.navigate('Image')}
        title="Go to Image Screen" 
      />
      <Button
        onPress={() => props.navigation.navigate('Counter')}
        title="Go to Counter Screen" 
      />
      <Button
        onPress={() => props.navigation.navigate('Flex')}
        title="Go to Flex Screen" 
      />
      <Button
        onPress={() => props.navigation.navigate('Color')}
        title="Go to Color Screen" 
      />
      <Button
        onPress={() => props.navigation.navigate('ColorControl')}
        title="Go to Color Control Screen" 
      />
      <Button
        onPress={() => props.navigation.navigate('TextInput')}
        title="Go to Text Input Screen" 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    borderWidth: 10,
    borderColor: 'red',
    fontSize: 40
  }
});

export default HomeScreen;
