import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';


export default function Training() {

  const [listExercicies, setListExercicies] = useState([
    {
      key: 1,
      type: 'Cardio Vascular',
      description: 'Esteira, Bicicleta....',
      conclusion: 'Treino Concluido: 16/03/2020'
    },
    { 
      key: 2,
      type: 'Treino A',
      description: 'Abdomen, Bíceps, Dorsal, Ombro',
      conclusion: 'Treino concluido: 16/03/2020 as 23h'
    },
    {
      key: 3,
      treino: 'Treino B',
      description: 'Abdômen, Funcional, Pernas',
      conclusion: 'Treino concluido: 16/03/2020 as 23h'
    },
    {
      key: 4,
      treino: 'Treino C',
      description: 'Lombar, Ombro, Peitoral, Tríceps',
      conclusion: 'Treino concluido: 16/03/2020 as 23h'
    },
  ]);

  return (
    <View style={styles.Wrapper}>
      <Text>Training</Text>
      <Text>Training</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  Wrapper: {
    padding: 15,
    borderRadius: 4,
    backgroundColor: '#FAFAFA',
  }
})