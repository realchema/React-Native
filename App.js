import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';

export default function App() {
  const [people, setPeople] = useState([
    {name: 'jose1', key: '1'},
    {name: 'jose2', key: '2'},
    {name: 'jose3', key: '3'},
    {name: 'jose4', key: '4'},
    {name: 'jose5', key: '5'},
    {name: 'jose6', key: '6'},
    {name: 'jose7', key: '7'},
    {name: 'jose7', key: '8'},
    {name: 'jose7', key: '9'},
    {name: 'jose7', key: '10'},
    {name: 'jose7', key: '11'},
  ]);

  return (
    <View style={styles.container}>
      <ScrollView>
      {people.map((item) => {
       return (
         <View key={item.key}>
           <Text style={styles.item}>{item.name}</Text>
         </View>
       )
      })}
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  item:{
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24
  }
});
