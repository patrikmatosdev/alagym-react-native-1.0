import React from 'react';
import { View, ImageBackground } from 'react-native';
import styles from './styles';
import FormRegistration from './FormRegistration';
import Media from '../../assets/img/exercises.png';

export default function UserRegistration() {
  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <ImageBackground source={Media} style={styles.image} />
      </View>
      <View style={styles.containerForm}>
        <FormRegistration />
      </View>
    </View>
  );
}
