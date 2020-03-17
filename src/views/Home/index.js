import React from 'react';
import { Text, View, StatusBar, StyleSheet, ScrollView } from 'react-native';
import Table from '../../components/Dashboard/Table';
import ImageTrainning from '../../components/Dashboard/ImageTrainning';


const styles = StyleSheet.create({
  Wrapper:{
    padding: 15,
    flex: 1,
    backgroundColor: '#fffafa',
  },
  Greeting: {
    fontWeight: 'bold',
    fontSize: 12,
    color: '#a9a9a9',
  },
  Name: {
    fontWeight: "bold",
    fontSize: 18,
  }
})

export default function Home(props) {

  /*const openHelp = () => {
    props.navigation.navigate('Trainning', {
      mensagem: "E ai, mensagem da HOME"
    });
  }*/

  return (
    <View style={styles.Wrapper}>
      <ScrollView>
        <StatusBar backgroundColor="#24292e" barStyle="dark-content"/>
        <Text style={styles.Greeting}>Boa tarde,</Text>
        <Text style={styles.Name}>Patrik !</Text>
        <Table />
        <ImageTrainning />
      </ScrollView>
    </View>
  )
}