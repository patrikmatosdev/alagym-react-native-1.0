import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { Avatar, Button } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ProfileDescription from './ProfileDescription';

export default function ProfileDetais() {
  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <Text style={styles.greeting}>Bom dia,</Text>
        <Text style={styles.nameProfile}>Patrik !</Text>
      </View>

      <TouchableOpacity style={styles.containerAvatar}>
        <Avatar
          size="xlarge"
          title="PM"
          activeOpacity={0.7}
          titleStyle={{ color: '#fafafa' }}
          rounded
          showEditButton
        />
      </TouchableOpacity>

      <View style={styles.containerDescriptions}>
        <ProfileDescription />
      </View>

      <View style={styles.containerButtons}>
        <Button
          buttonStyle={{ backgroundColor: '#ff8c00', borderRadius: 5 }}
          title="Sair"
        />
      </View>
    </View>
  );
}
