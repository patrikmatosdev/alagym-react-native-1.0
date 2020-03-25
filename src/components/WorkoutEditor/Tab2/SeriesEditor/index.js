import React, { useState } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { TextInput } from 'react-native-paper';
import { Button, ListItem } from 'react-native-elements';

export default function SeriesEditor(props) {
  const value = props.value;

  return (
    <View>
      {value.map((item, index) => {
        const title = `Serie ${index + 1}`;
        return <ListItem key={index} title={title} />;
      })}
    </View>
  );
}
