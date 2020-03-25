import React from 'react';
import { ButtonGroup } from 'react-native-elements';
import { exeMode } from './constants';

const buttons = ['Repetições', 'Tempo'];

export default function ModeExercise(props) {
  const setMode = (mode) => {
    props.onChange(mode === 0 ? exeMode.Repetitions : exeMode.Time);
  };

  return (
    <ButtonGroup
      selectedIndex={props.value === exeMode.Repetitions ? 0 : 1}
      buttons={buttons}
      containerStyle={{ height: 50 }}
      onPress={setMode}
    />
  );
}
