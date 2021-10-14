import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';

export default function App() {
  const [people, setPeople] = useState([
    {name: 'jose1', id: '1'},
    {name: 'jose2', id: '2'},
    {name: 'jose3', id: '3'},
    {name: 'jose4', id: '4'},
    {name: 'jose5', id: '5'},
    {name: 'jose6', id: '6'},
    {name: 'jose7', id: '7'},
    {name: 'jose8', id: '8'},
    {name: 'jose9', id: '9'},
  ]);
  return (
    <View style={styles.container}>
        <FlatList 
        numColumns ={2}
        keyExtractor={(item) => item.id}
        data={people}
        renderItem={({item}) => (
          <Text style={styles.item}>{item.name}</Text>
        )}
        />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  item: {
    marginTop:24,
    padding:30,
    backgroundColor:'pink',
    fontSize:24,
    marginHorizontal:1
  }
});
