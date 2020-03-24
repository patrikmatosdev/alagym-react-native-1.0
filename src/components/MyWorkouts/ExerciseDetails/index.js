import React, { useState, useEffect } from 'react';
import { StyleSheet, ImageBackground, Text } from 'react-native';
import Swiper from 'react-native-swiper';
import BoxOverlay from '../../BoxOverlay';
import ExerciseSlide from './ExerciseSlide/index';
import personBackground from '../../../assets/img/background.jpeg';

const axios = require('axios');

export default function ExerciseDetails() {
  const [exercise, setExercises] = useState([]);

  useEffect(() => {
    axios.get('http://192.168.1.69:3030/exercises').then((resp) => {
      setExercises(resp.data);
    });
  }, []);

  return (
    <ImageBackground source={personBackground} style={styles.container}>
      <BoxOverlay />
      <Swiper style={styles.swiper}>
        {exercise.map((item) => {
          return (
            <ExerciseSlide
              key={item.id}
              name={item.title}
              serie={item.series.serie}
              repetitions={item.series.repetitions}
              img={item.media.img}
            />
          );
        })}
      </Swiper>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  swiper: {},
});
