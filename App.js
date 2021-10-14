import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, ScrollView, FlatList, TouchableOpacity } from 'react-native';

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
    {name: 'jose10', id: '10'},
    {name: 'jose11', id: '11'},
  ]);

  const pressHandler = (id) => {
    console.log(id);
    setPeople((prevPeople) => {
      return prevPeople.filter(person => person.id != id)
    })
  }

  return (
    <View style={styles.container}>
        <FlatList
        numColumns={2}
        keyExtractor={(item) => item.id}
        data={people}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => pressHandler(item.id)}>
             <Text style={styles.item}> {item.name}</Text>
          </TouchableOpacity>
         
        )}
        />

      {/* <ScrollView>
      {people.map((item) => {
       return (
         <View key={item.key}>
           <Text style={styles.item}>{item.name}</Text>
         </View>
       )
      })}
      </ScrollView> */}
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
    fontSize: 24,
    marginHorizontal: 1
  }
});
