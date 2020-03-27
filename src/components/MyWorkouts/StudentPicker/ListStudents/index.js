import React from 'react';
import { ListItem, Icon } from 'react-native-elements';
import foto from '../../../../assets/img/background.jpeg';
import { TouchableOpacity } from 'react-native';

export default function ListStudents() {
  const onDetails = () => {
    alert('Em desenvolivmento');
  };
  return (
    <ListItem
      leftAvatar={{ uri: foto }}
      title={'Patrik Matos'}
      subtitle={'Patrik'}
      rightIcon={
        <TouchableOpacity onPress={onDetails}>
          <Icon name="view-list" />
        </TouchableOpacity>
      }
      bottomDivider
    />
  );
}
