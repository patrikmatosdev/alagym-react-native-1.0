import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';

import TrainingA from '../../assets/img/treinoA.jpeg';
import TrainingB from '../../assets/img/treinoB.jpeg';
import TrainingC from '../../assets/img/treinoC.jpeg';
import { useNavigation } from '@react-navigation/native';


export default function MyWorkouts() {

  const navigation = useNavigation();

  const openTraining = routeName => {
    navigation.navigate(routeName);
  }

  return (
    <View style={styles.Container}>
      <TouchableOpacity onPress={() => openTraining('TypeExercises')}>
        <View style={styles.Media}>
          <ImageBackground source={TrainingA} style={styles.Image}>
            <View style={styles.ImageLabel}>
              <Text style={styles.Label}>Treino A ( Abdômen, Bíceps, Dorsal, Ombro)</Text>
            </View>
          </ImageBackground>  
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => openTraining('TypeExercises')}>  
        <View style={styles.Media}>
          <ImageBackground source={TrainingB} style={styles.Image}>
            <View style={styles.ImageLabel}>
              <Text style={styles.Label}>Treino B ( Abdômen, Functional, Pernas)</Text>
            </View>
          </ImageBackground>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => openTraining('TypeExercises')}>
        <View style={styles.Media}>
          <ImageBackground source={TrainingC} style={styles.Image}>
            <View style={styles.ImageLabel}>
              <Text style={styles.Label}>Lombar, Ombro, Peitoral, Tríceps</Text>
            </View>
          </ImageBackground>
        </View>
      </TouchableOpacity>        
    </View>
  )
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    paddingHorizontal: 15,
  },

  Title: {
    marginTop: 25,
    fontSize: 26,
    color: '#a9a9a9', 
    fontWeight: 'bold'
  },

  Media: {
    borderRadius: 8,
    overflow: 'hidden',
    height: 130,
    marginTop: 15,
  },

  Label: {
    color: '#FAFAFA',
    fontWeight: 'bold',
    fontSize: 18,
  },  

  Image: {
    position: 'relative',
    width: '100%',
    height: '100%',
  },

  ImageLabel: {
    position: "absolute",
    bottom: 10,
    left: 15,
  },

});