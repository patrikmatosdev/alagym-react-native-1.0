import React from 'react';
import { TextInput, List } from 'react-native-paper';
import { View } from 'react-native';
import styles from './styles';

export default function Tab1() {
  return (
    <View style={styles.container}>
      <TextInput
        mode="outlined"
        style={styles.input}
        label="Nome do Treino"
        placeholder="Exercicio A"
      />
      <TextInput
        mode="outlined"
        style={styles.input}
        label="Observação (opcional)"
        placeholder="Observação"
      />
      <TextInput
        mode="outlined"
        style={styles.input}
        label="Duração (12 semanas)"
        placeholder="10"
      />
    </View>
  );
}
