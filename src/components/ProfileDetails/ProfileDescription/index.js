import React from 'react';
import { View, Text } from 'react-native';
import { Input, Icon } from 'react-native-elements';
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
          placeholder="alagym@gmail.com"
          leftIcon={
            <IconButton icon="at" color="#fafafa" size={28} color="black" />
          }
        />
      </View>
    </View>
  );
}
