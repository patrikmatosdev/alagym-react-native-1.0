import React from 'react';
import { View, Text } from 'react-native';
import { Appbar, TextInput } from 'react-native-paper';
import styles from './styles';
import ListStudents from './ListStudents';

export default function StudentPicker() {
  return (
    <View style={styles.container}>
      <View style={styles.containerContent}>
        <View style={styles.containerInputs}>
          <TextInput
            type="outlined"
            label="Buscar Alunos"
            placeholder="Ex: Patrik Matos"
          />
        </View>
        <View style={styles.containerList}>
          <ListStudents />
          <ListStudents />
          <ListStudents />
          <ListStudents />
        </View>
      </View>
    </View>
  );
}
