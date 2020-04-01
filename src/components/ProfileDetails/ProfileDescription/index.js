import React from 'react';
import { View } from 'react-native';
import { Input } from 'react-native-elements';
import styles from './styles';
import { IconButton } from 'react-native-paper';

export default function ProfileDescription() {
  return (
    <View style={styles.container}>
      <View style={styles.containerInput}>
        <Input
          placeholder="Patrik Feitosa Matos"
          leftIcon={
            <IconButton
              icon="account"
              color="#fafafa"
              size={28}
              color="black"
            />
          }
        />
      </View>
      <View style={styles.containerInput}>
        <Input
          placeholder="alagym@email.com"
          leftIcon={
            <IconButton icon="at" color="#fafafa" size={28} color="black" />
          }
        />
      </View>
    </View>
  );
}
