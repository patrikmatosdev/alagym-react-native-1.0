import React from 'react';
import personBackground from '../../assets/img/person-holding.jpg';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Button } from 'react-native-elements';

export default function ExerciseSlide(props) {
  return (
    <View style={styles.box}>
      <View style={styles.exerciseBox}>
        <View style={styles.imageBox}>
          <Image source={personBackground} style={styles.image} />
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
              <Text style={styles.title}>Puxada Maquina</Text>
            </View>
            <View style={styles.instruction}>
              <View style={styles.instructionBox}>
                <Text style={styles.instructionTitle}>serie</Text>
                <Text style={styles.label}>3x</Text>
              </View>
              <View style={styles.instructionBox}>
                <Text style={styles.instructionTitle}>repetições</Text>
                <Text style={styles.label}>12</Text>
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

const styles = StyleSheet.create({
  box: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 300,
  },

  exerciseBox: {
    width: 350,
    height: 300,
    backgroundColor: '#f0f',
    borderRadius: 10,
    overflow: 'hidden',
  },

  imageBox: {
    flex: 2,
    backgroundColor: '#ccc',
    zIndex: 1,
  },

  image: {
    width: '100%',
    height: '100%',
  },

  contentBox: {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: 150,
    backgroundColor: '#fafafa',
  },

  buttonBox: {
    flex: 0,
    marginTop: -25,
    marginBottom: -25,
    //marginTop: -25,
    zIndex: 20,
    alignSelf: 'center',
  },

  button: {
    paddingHorizontal: 70,
    height: 50,
    backgroundColor: '#24292e',
    borderRadius: 10,
  },

  description: {
    flex: 1,
    padding: 15,
  },

  titleBox: {
    marginTop: 25,
  },

  title: {
    fontSize: 24,
    color: '#ff8c00',
    fontWeight: 'bold',
  },

  instruction: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  instructionsBox: {
    flex: 1,
  },

  instructionTitle: {
    color: 'orange',
    fontSize: 18,
    fontWeight: 'bold',
  },

  label: {
    fontWeight: 'bold',
    color: '#a9a9a9',
    fontSize: 16,
  },
});
