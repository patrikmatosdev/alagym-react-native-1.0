import React from 'react';
import { View, Text } from 'react-native';
import { TextInput } from 'react-native-paper';
import styles from './styles';
import StudentItem from './StudentItem';

export default function StudentPicker(props) {
  const onFocusInput = () => {
    props.onToggleList(true);
  };

  const onBlurInput = () => {
    props.onToggleList(false);
  };

  return (
    <View style={styles.container}>
      <TextInput
        onFocus={onFocusInput}
        onBlur={onBlurInput}
        type="outlined"
        label="Buscar Alunos"
        placeholder="Ex: Patrik Matos"
      />

      {!!props.showList && (
        <View style={styles.containerList}>
          <StudentItem />
          <StudentItem />
          <StudentItem />
        </View>
      )}
    </View>
  );
}
