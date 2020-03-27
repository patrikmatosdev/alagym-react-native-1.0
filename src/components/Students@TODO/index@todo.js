import React from 'react';
import { View, Text } from 'react-native';
import { Appbar, TextInput } from 'react-native-paper';
import styles from '../MyWorkouts/StudentPicker/styles';
import ListStudents from '../MyWorkouts/StudentPicker/ListStudents/index';

function Students() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Appbar.Header style={{ backgroundColor: '#24292e' }}>
          <Appbar.Content title="Lista de Alunos" />
        </Appbar.Header>
      </View>
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
