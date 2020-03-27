import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from './styles';
import IMG2 from '../../assets/img/peitoral.png';

export default function CardItem() {
  return (
    <View style={styles.container}>
      <View style={styles.boxTitle}>
        <Text style={styles.title}>MUSCULO</Text>
      </View>
      <View style={styles.media}>
        <Image source={IMG2} style={styles.image} />
      </View>
    </View>
  );
}
