import React from 'react';
import { Text, View } from 'react-native';


export default function Help(props) {
  // const mensagem = props.route.params.mensagem;
  //const { mensagem } = props.route.params;
  // const {params: { mensagem }} = props.route;
  const mensagem = 'o gio e gay';

  return (
    <View>
      <Text>HELP {mensagem}</Text>

      <Text>
        {JSON.stringify(props, null, 6)}
      </Text>
    </View>
  )
}