import React from 'react';
import { TextInput, List } from 'react-native-paper';
import { View } from 'react-native';
import styles from './styles';
import { Dropdown } from 'react-native-material-dropdown';

const typesTraining = [
  {
    value: 'Construção Muscular',
  },
  {
    value: 'Perda de peso',
  },
  {
    value: 'Ganho em massa',
  },
  {
    value: 'Ganhar força',
  },
  {
    value: 'Iniciante (Levantamento de peso básico)',
  },
];

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
