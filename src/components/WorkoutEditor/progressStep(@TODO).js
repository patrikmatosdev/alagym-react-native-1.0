import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import Tab1 from './Tab1';
import Tab2 from './Tab2';
import { Button } from 'react-native-elements';

function WorkoutEditor() {
  return (
    <View style={{ display: 'flex', flex: 1 }}>
      <ProgressSteps style={{ flex: 1, backgroundColor: 'purple' }}>
        <ProgressStep label="Treino" style={{ backgroundColor: 'yellow' }}>
          <Tab1 />
        </ProgressStep>
        <ProgressStep
          nextBtnText="Proximo"
          nextBtnStyle={{ backgroundColor: '#ccc' }}
          style={{ backgroundColor: 'blue' }}
          label="Exercicios"
        >
          <Tab2 />
        </ProgressStep>
        <ProgressStep
          label="Pré-visualização"
          style={{ backgroundColor: 'orange' }}
        >
          <View>
            <Text>This is the content within step 3!</Text>
          </View>
        </ProgressStep>
      </ProgressSteps>
    </View>
  );
}
