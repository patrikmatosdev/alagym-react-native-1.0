import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Home from '../views/Home';
import Training from '../views/Training';
import Help from '../views/Help';
import Profile from '../views/Profile';

export default function AppStack() {
  return (
    <Stack.Navigator screenOptions={{ headerStyle: {backgroundColor: '#ff8c00'}, headerTintColor: '#FFF' }}>
      <Stack.Screen 
        name='Home' 
        component={Home} 
        options={{ title: 'Dashboard' }} 
      />
      <Stack.Screen 
        name='Training' 
        component={Training} 
        options={{ title: 'Treinos' }}
      />
      <Stack.Screen 
        name='Help' 
        component={Help} 
        options={{ title: 'Fale com o Personal' }}
      />
      <Stack.Screen 
        name='Profile' 
        component={Profile} 
        options={{ title: 'Perfil' }}
    />
    </Stack.Navigator>
  );
}
