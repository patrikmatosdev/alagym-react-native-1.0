import React from 'react';
import { Text, View, Button, StatusBar } from 'react-native';

export default function Home(props) {

  const openHelp = () => {
    props.navigation.navigate('Help', {
      mensagem: "E ai, mensagem da HOME"
    });
  }

  return (
    <View>
      <StatusBar backgroundColor="red" barStyle="light-content" />
      <Text>Home</Text>

      <Button title="Abrir HELP" onPress={openHelp} />

    </View>
  )
}