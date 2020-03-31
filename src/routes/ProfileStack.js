import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileDetais from '../components/ProfileDetails/index';
import { IconButton } from 'react-native-paper';
const Stack = createStackNavigator();

export default function ProfileStack() {
  return (
    <Stack.Navigator
      initialRouteName="ProfileDetails"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#24292e',
        },
        headerTintColor: '#fafafa',
      }}
    >
      <Stack.Screen
        name="ProfileDetais"
        component={ProfileDetais}
        options={{
          title: 'Perfil',
          headerTitleStyle: 'bold',
          headerRight: () => (
            <IconButton
              icon="border-color"
              size={26}
              color="#ff8c00"
              onPress={() => alert('Em desenvolvimento...')}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}
