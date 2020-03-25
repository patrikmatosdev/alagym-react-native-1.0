import React from 'react';
import { View, Image, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles';

export default function ListenExercise(props) {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <Image
          source={{ uri: props.img }}
          resizeMode="cover"
          style={styles.image}
        />
        <View style={styles.description}>
          <Text style={styles.title}>{props.name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
