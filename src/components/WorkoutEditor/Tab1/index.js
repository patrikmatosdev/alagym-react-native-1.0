import React from 'react';
import { TextInput } from 'react-native-paper';
import { View } from 'react-native';
import styles from './styles';

export default function Tab1() {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        label="Nome do Treino"
        placeholder="Exercicio A"
      />
      <TextInput
        style={styles.input}
        label="Observação"
        placeholder="Observação"
      />
    </View>
  );
}
