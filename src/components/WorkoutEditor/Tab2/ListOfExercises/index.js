import React from 'react';
import { ListItem } from 'react-native-elements';

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
