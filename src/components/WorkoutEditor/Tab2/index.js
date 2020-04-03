import React, { useState, useEffect } from 'react';
import { TextInput } from 'react-native-paper';
import { View } from 'react-native';
import styles from './styles';
import ListOfExercises from './ListOfExercises';
import removeAccents from '../../../util/removeAccents';
import ModeExercise from './ModeExercise';
import { exeMode } from './ModeExercise/constants';
import SeriesEditor from './SeriesEditor';

const axios = require('axios');

export default function Tab2() {
  const [exercises, setExercises] = useState([]);
  const [query, setQuery] = useState('');
  const [showExercises, setShowExercises] = useState(false);
  const [mode, setMode] = useState(exeMode.Repetitions);
  const [lineSerie, setLineSerie] = useState();

  const [series, setSeries] = useState([
    {
      interval: 60,
      repetitions: 16,
    },
    {
      interval: 60,
      repetitions: 14,
    },
    {
      interval: 60,
      repetitions: 12,
    },
    {
      interval: 60,
      repetitions: 10,
    },
    {
      interval: 60,
      repetitions: 8,
    },
  ]);

  const onFocusInput = () => {
    setShowExercises(true);
  };

  const onBlurInput = () => {
    setShowExercises(false);
  };

  const filteredExercises = exercises.filter((item) => {
    const _title = removeAccents(item.title);
    if (!query) return true;
    if (_title.startsWith(query.toLowerCase())) {
      return true;
    } else {
      return false;
    }
  });

  useEffect(() => {
    axios.get('http://192.168.1.69:3030/exercises').then((resp) => {
      setExercises(resp.data);
    });
  }, []);

  return (
    <View style={styles.container}>
      <TextInput
        mode="outlined"
        onBlur={() => onBlurInput()}
        onFocus={() => onFocusInput()}
        style={styles.input}
        label="Exercicio"
        placeholder="Supino Máquina"
        value={query}
        onChangeText={(query) => setQuery(query)}
      />

      {showExercises ? (
        filteredExercises.map((item) => {
          return (
            <ListOfExercises
              key={item.id}
              img={item.media.img}
              name={item.title}
              subtitle={item.machine}
            />
          );
        })
      ) : (
        //<ModeExercise onChange={(mode) => setMode(mode)} value={mode} />
        <SeriesEditor value={series} />
      )}
    </View>
  );
}
