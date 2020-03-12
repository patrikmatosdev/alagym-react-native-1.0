import * as React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

import Home from '../Home';
import Training from '../Training';
import Help from '../Help';
import Profile from '../Profile';


export default function RoutesBottom() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#ff4500"
      style={{ backgroundColor: 'tomato' }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          
        }}
      />
      <Tab.Screen
        name="Training"
        component={Training}
        options={{
          tabBarLabel: 'Treinos',
          
        }}
      />
      <Tab.Screen
        name="Help"
        component={Help}
        options={{
          tabBarLabel: 'Personal',
          
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          
        }}
      />
    </Tab.Navigator>
  );
}