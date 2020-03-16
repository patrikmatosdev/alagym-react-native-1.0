import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  Wrapper: {
    marginTop: 15,
    marginBottom: 10,
  },
  Title: {
    marginTop: 10,
    fontSize: 14,
    color: '#a9a9a9',
    fontWeight: 'bold',
  },
  WrapperImg: {
    marginTop: 3,
    height: 150,
    borderRadius: 6,
    overflow: 'hidden',
    backgroundColor: '#ccc',
  },
  File: {
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
  },
})

export default function ImageTrainning(props) {

  const openTraining = () => {
    alert('Em Desenvolvimento ...')
  }

  return (
    <View style={styles.Wrapper}>
      <Text style={styles.Title}>Próximos Treinos</Text>
      <TouchableOpacity 
        style={styles.WrapperImg} 
        activeOpacity={.5} 
        onPress={openTraining}
      >
        <Image 
          source={require('./../../assets/img/person-holding.jpg')} 
          style={styles.File}
        />
      </TouchableOpacity>
    </View>
  )
}