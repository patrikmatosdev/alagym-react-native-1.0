import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { Button } from 'react-native-elements';

export default function ButtonEditor() {
  return (
    <View style={styles.container}>
      <View style={styles.containerButton}>
        <Button
          title="Adicionar Série"
          buttonStyle={{ backgroundColor: 'green' }}
          icon={{
            name: 'add',
            size: 22,
            color: 'white',
          }}
        />
      </View>
      <View style={styles.containerButton}>
        <Button
          title="Remover Série"
          buttonStyle={{ backgroundColor: 'red' }}
          icon={{
            name: 'remove',
            size: 15,
            color: 'white',
          }}
        />
      </View>
    </View>
  );
}
