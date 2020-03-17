import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
//import fetchExercicies from '../../api/fetchExercicies';


const axios = require('axios');


export default function Training() {

  const [exercicies, setExercicies] = useState();

  useEffect(() => {
    axios.get('http://192.168.1.69:3030/exercicies').then(resp => {
      setExercicies(resp.data);
    })
  }, [])
     


  return (
    <View style={styles.Wrapper}>
      <Text>{JSON.stringify(exercicies)}</Text>
      <Text>s</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  Wrapper: {
    padding: 15,
    borderRadius: 4,
    backgroundColor: '#FAFAFA',
  }
})