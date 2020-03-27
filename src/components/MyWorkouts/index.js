import React from 'react';
import { View } from 'react-native';
//import styles from './ListOfWorkouts/styles';
//import ListOfWorkouts from './ListOfWorkouts';
import StudentPicker from './StudentPicker';

export default function MyWorkouts() {
  /*return (
    <View style={styles.Container}>
      <ListOfWorkouts />
    </View>
  );*/

  return (
    <View style={{ flex: 1 }}>
      <StudentPicker />
    </View>
  );
}
