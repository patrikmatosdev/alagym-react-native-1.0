import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import TrainingA from '../../../assets/img/treinoA.jpeg';
import TrainingB from '../../../assets/img/treinoB.jpeg';
import TrainingC from '../../../assets/img/treinoC.jpeg';

export default function ListOfWorkouts() {
  const navigation = useNavigation();

  const openTraining = (routeName) => {
    navigation.navigate(routeName);
  };

  return (
    <View style={styles.Container}>
      <TouchableOpacity onPress={() => openTraining('TypeExercises')}>
        <View style={styles.Media}>
          <ImageBackground source={TrainingA} style={styles.Image}>
            <View style={styles.ImageLabel}>
              <Text style={styles.Label}>
                Treino A ( Abdômen, Bíceps, Dorsal, Ombro)
              </Text>
            </View>
          </ImageBackground>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => openTraining('TypeExercises')}>
        <View style={styles.Media}>
          <ImageBackground source={TrainingB} style={styles.Image}>
            <View style={styles.ImageLabel}>
              <Text style={styles.Label}>
                Treino B ( Abdômen, Functional, Pernas)
              </Text>
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
  );
}
