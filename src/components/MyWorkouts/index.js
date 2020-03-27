import React, { useState } from 'react';
import { View } from 'react-native';
import StudentPicker from './StudentPicker';
import ListOfWorkouts from './ListOfWorkouts';
//import styles from './ListOfWorkouts/styles';

export default function MyWorkouts() {
  const [showStudentsList, setShowStudentsList] = useState(false);

  return (
    <View style={{ flex: 1 }}>
      <StudentPicker
        onToggleList={(show) => setShowStudentsList(show)}
        showList={showStudentsList}
      />
      {!showStudentsList && <ListOfWorkouts />}
    </View>
  );
}
