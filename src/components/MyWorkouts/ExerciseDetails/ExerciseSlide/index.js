import React from 'react';
import { View, Text, Image } from 'react-native';
import { Button } from 'react-native-elements';
import styles from './styles';

export default function ExerciseSlide(props) {
  return (
    <View style={styles.box}>
      <View style={styles.exerciseBox}>
        <View style={styles.imageBox}>
          <Image source={{ uri: props.img }} style={styles.image} />
        </View>

        <View style={styles.buttonBox}>
          <Button
            onPress={() => alert('teste')}
            title="Tá Feito!"
            type="solid"
            buttonStyle={styles.button}
            titleStyle={{
              fontSize: 18,
              fontWeight: 'bold',
              color: '#ffffff',
            }}
          />
        </View>

        <View style={styles.contentBox}>
          <View style={styles.description}>
            <View style={styles.titleBox}>
              <Text style={styles.title}>{props.name}</Text>
            </View>

            <View style={styles.instruction}>
              <View style={styles.instructionBox}>
                <Text style={styles.instructionTitle}>serie</Text>
                <Text style={styles.label}>{props.serie}x</Text>
              </View>
              <View style={styles.instructionBox}>
                <Text style={styles.instructionTitle}>repetições</Text>
                <Text style={styles.label}>{props.repetitions}</Text>
              </View>
              <View style={styles.instructionBox}>
                <Text style={styles.instructionTitle}>descanso</Text>
                <Text style={styles.label}>0' 40 a 1'</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
