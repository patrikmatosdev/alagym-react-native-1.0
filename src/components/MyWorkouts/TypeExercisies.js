import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Exercise from './Exercise';

const axios = require('axios');

export default function TypeExercisies() {

  const [exercise, setExercises] = useState([]);
  
  const onPressExercise = (title) => {
    alert('Campo selecionado ' + title);
  }

  useEffect(() => {
    axios.get('http://192.168.1.69:3030/exercises').then(resp => {
      setExercises(resp.data);
      //alert(JSON.stringify(exercise))
    })
  }, [])
     
  return (
    <ScrollView>
      <View style={styles.Wrapper}>
        <View style={styles.Header}>
          <Text style={styles.Title}>Todos os Exercicios</Text>
        </View>

        {
          exercise.map((item) => {
          
            const serie = item.series && item.series.serie || '';
            const repetitions = item.series && item.series.repetitions || '';
            const image = item.media && item.media.img || '';
            
            return (
              <Exercise
                onPress={onPressExercise} 
                key={item.id}
                title={item.title || '-'}
                machine={item.machine || '-'}
                colors={item.colors || '-'}
                image={image}
                serie={serie}
                repetitions={repetitions}
              />
            )
          })
        }
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  Wrapper: {
    flex: 1,
    backgroundColor: '#24292e',
  },

  Header: {
   paddingVertical: 20,
   paddingHorizontal: 25,
  },

  Title: {
    fontSize: 22,
    fontFamily: 'Tahoma', 
    color: "#FAFAFA"
  }
})