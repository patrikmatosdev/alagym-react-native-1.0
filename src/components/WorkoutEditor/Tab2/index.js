import React, { useState, useEffect } from 'react';
import { TextInput } from 'react-native-paper';
import { View } from 'react-native';
import styles from './styles';
import ListenExercise from './ListenExercise';

const axios = require('axios');

export default function Tab2() {
  const [exercise, setExercises] = useState([]);

  useEffect(() => {
    axios.get('http://192.168.1.69:3030/exercises').then((resp) => {
      setExercises(resp.data);
    });
  }, []);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        label="Exercicio"
        placeholder="Supino Máquina"
      />

      {exercise.map((item) => {
        return (
          <ListenExercise
            key={item.id}
            img={item.media.img}
            name={item.title}
          />
        );
      })}
    </View>
  );
}
