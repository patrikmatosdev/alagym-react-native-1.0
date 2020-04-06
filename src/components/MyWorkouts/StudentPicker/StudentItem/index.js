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
        leftAvatar={{
          source: {
            uri:
              'https://scontent.fcgh5-1.fna.fbcdn.net/v/t1.0-9/s960x960/78496617_2682465961847090_742012697679233024_o.jpg?_nc_cat=108&_nc_sid=7aed08&_nc_eui2=AeHvjI4COrKWy--0LTL_TkTRN7cJwzkEZn43twnDOQRmfjGiQ57A0YoddvhDQpV-1H7EzaIG_yJFwltFlwSzlLCM&_nc_oc=AQlz2UYe1M4LpxX_xP8pbGa1lTA6PZi7Vg9nX-7fEGQ5lRnw1eRI7vMjaTtyQRAGz6w&_nc_ht=scontent.fcgh5-1.fna&_nc_tp=7&oh=74e1dc92fc353242c9c8ce92038d8ca7&oe=5EB214B9',
          },
        }}
        title={'Patrik Matos'}
        subtitle={'Patrik'}
        rightIcon={<Icon name="view-list" />}
        bottomDivider
      />
    </TouchableOpacity>
  );
}
