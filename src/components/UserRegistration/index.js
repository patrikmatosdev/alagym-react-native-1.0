import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import styles from './styles';
import FormRegistration from './FormRegistration';
import Media from '../../assets/img/exercises.png';
import { Button, SocialIcon } from 'react-native-elements';

export default function UserRegistration() {
  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <ImageBackground source={Media} style={styles.image} />
      </View>
      <View style={styles.containerForm}>
        <FormRegistration />
      </View>
      <View style={styles.containerButtons}>
        <View style={styles.button}>
          <Button title="Criar Conta" type="clear" />
        </View>
      </View>
    </View>
  );
}
