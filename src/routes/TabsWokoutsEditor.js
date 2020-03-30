import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Tab1 from '../components/WorkoutEditor/Tab1/index';
import Tab2 from '../components/WorkoutEditor/Tab2';

const Tab = createMaterialTopTabNavigator();

export default function TabsWorkoutsEditor() {
  return (
    <Tab.Navigator
      initialRouteName="Tab1"
      tabBarOptions={{
        activeTintColor: '#FAFAFA',
        labelStyle: { fontSize: 12 },
        style: { backgroundColor: '#24292e' },
      }}
    >
      <Tab.Screen
        name="Tab1"
        component={Tab1}
        options={{ tabBarLabel: 'Treino' }}
      />
      <Tab.Screen
        name="Tab2"
        component={Tab2}
        options={{ tabBarLabel: 'Exercícios' }}
      />
    </Tab.Navigator>
  );
}
