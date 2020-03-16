import React from 'react';
import { Text, View, Button, StatusBar, StyleSheet } from 'react-native';
import Table from '../../components/Dashboard/Table';
import ProxTrainning from '../../components/Dashboard/ProxTrainning';

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

  const openHelp = () => {
    props.navigation.navigate('Help', {
      mensagem: "E ai, mensagem da HOME"
    });
  }

  return (
    <View style={styles.Wrapper}>
      <StatusBar backgroundColor="red" barStyle="light-content" />
      <Text style={styles.Greeting}>Boa tarde,</Text>
      <Text style={styles.Name}>Patrik !</Text>
      <Table />
      <ProxTrainning />
      <Button title="Abrir HELP" onPress={openHelp} />
    </View>
  )
}