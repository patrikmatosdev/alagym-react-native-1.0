import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import styles from './styles';

export default function TouchableTrainning(props) {
  return (
    <View style={styles.Wrapper}>
      <Text style={styles.Title}>Próximos Treinos</Text>
      <View style={styles.WrapperImg} activeOpacity={0.5}>
        <Image
          source={require('../../../assets/img/person-holding.jpg')}
          style={styles.File}
        />
      </View>
    </View>
  );
}
