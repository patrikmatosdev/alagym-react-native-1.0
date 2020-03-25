import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import Tab1 from './Tab1';
import Tab2 from './Tab2';

export default function WorkoutEditor() {
  return (
    <View style={{ flex: 1 }}>
      <ProgressSteps>
        <ProgressStep label="Treino">
          <Tab1 />
        </ProgressStep>
        <ProgressStep label="Exercicios">
          <Tab2 />
        </ProgressStep>
        <ProgressStep label="Pré-visualização">
          <View style={{ alignItems: 'center' }}>
            <Text>This is the content within step 3!</Text>
          </View>
        </ProgressStep>
      </ProgressSteps>
    </View>
  );
}
