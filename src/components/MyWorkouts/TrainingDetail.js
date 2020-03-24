import React from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import personBackground from '../../assets/img/background.jpeg';
import Swiper from 'react-native-swiper';
import ExerciseSlide from './ExerciseSlide';
import BoxOverlay from '../BoxOverlay';

export default function TrainingDetail() {
  return (
    <ImageBackground source={personBackground} style={styles.container}>
      <BoxOverlay />
      <Swiper style={styles.swiper}>
        <ExerciseSlide />
        <ExerciseSlide />
        <ExerciseSlide />
        <ExerciseSlide />
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
