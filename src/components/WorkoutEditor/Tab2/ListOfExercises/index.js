import React from 'react';
import { ListItem } from 'react-native-elements';
import { ScrollView } from 'react-native';

export default function ListOfExercises(props) {
  return (
    <ListItem
      leftAvatar={{ source: { uri: props.img } }}
      title={props.name}
      subtitle={props.subtitle}
      bottomDivider
    />
  );
}
