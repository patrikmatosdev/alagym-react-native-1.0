import React from 'react';
import { ListItem, Icon } from 'react-native-elements';
import foto from '../../../../assets/img/background.jpeg';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function StudentItem() {
  /* const navigation = useNavigation();

  const openStudentsTraining = (routeName) => {
    navigation.navigate(routeName);
  };

  */

  return (
    <TouchableOpacity onPress={() => alert('Em Desenvolvimento...')}>
      <ListItem
        leftAvatar={{ uri: foto }}
        title={'Patrik Matos'}
        subtitle={'Patrik'}
        rightIcon={<Icon name="view-list" />}
        bottomDivider
      />
    </TouchableOpacity>
  );
}
