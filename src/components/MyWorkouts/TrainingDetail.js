import  React  from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TrainingDetail() {
  return(
    <View style={styles.container}>
      <Text style={styles.text}>1</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{},
  text: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold'
  }
})