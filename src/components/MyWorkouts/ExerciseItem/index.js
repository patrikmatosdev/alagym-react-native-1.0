import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

export default function ExerciseItem(props) {
  const navigation = useNavigation();

  const openExerciseDetails = (routeName) => {
    navigation.navigate(routeName);
  };

  return (
    <TouchableOpacity onPress={() => openExerciseDetails('ExerciseDetails')}>
      <View style={styles.Exercise}>
        <Image
          source={{ uri: props.image }}
          resizeMode="cover"
          style={styles.Image}
        />
        <View style={styles.Description}>
          <Text style={styles.Title}>{props.title}</Text>
          <View style={styles.Information}>
            <Text style={styles.Serie}>
              {props.serie}x {props.repetitions}
            </Text>
            <Image style={styles.Color} />
            <Text style={styles.Machine}>{props.machine}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
