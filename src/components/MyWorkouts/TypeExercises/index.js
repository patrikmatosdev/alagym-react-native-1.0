import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ExerciseItem from '../ExerciseItem';
import styles from './styles';

const axios = require('axios');

export default function TypeExercises() {
  const [exercise, setExercises] = useState([]);

  useEffect(() => {
    axios.get('http://192.168.1.69:3030/exercises').then((resp) => {
      setExercises(resp.data);
    });
  }, []);

  return (
    <ScrollView>
      <View style={styles.Wrapper}>
        {exercise.map((item) => {
          const serie = (item.series && item.series.serie) || '';
          const repetitions = (item.series && item.series.repetitions) || '';
          const image = (item.media && item.media.img) || '';

          return (
            <ExerciseItem
              key={item.id}
              title={item.title || '-'}
              machine={item.machine || '-'}
              colors={item.colors || '-'}
              image={image}
              serie={serie}
              repetitions={repetitions}
            />
          );
        })}
      </View>
    </ScrollView>
  );
}
