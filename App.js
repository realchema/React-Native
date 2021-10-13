import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [name, setName] = useState('jose')
  const clickHandler = () => {
    setName('cun-li')
  } 
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.boldText}>hello, world</Text>
      </View>
      <View style={styles.body}>
        <Text>My name is {name}</Text>
        <Text></Text>
        <View style={styles.buttonContainer}>
          <Button title='update state' onPress={clickHandler}/>
        </View>
        <Text>lorem ipsum dolor sit amet.</Text>
        <Text>lorem ipsum dolor sit amet.</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: 'pink',
    padding: 20,
  },
  boldText: {
    fontWeight: 'bold',
  },
  body: {
    backgroundColor: 'yellow',
    padding: 20
  },
  buttonContainer: {
    marginTop: 20
  }
});
