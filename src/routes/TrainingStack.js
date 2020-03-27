import * as React from 'react';
import {
  createStackNavigator,
  NavigationContainer,
} from '@react-navigation/stack';
import MyWorkouts from '../components/MyWorkouts/index';
import TypeExercises from '../components/MyWorkouts/TypeExercises';
import ExerciseDetails from '../components/MyWorkouts/ExerciseDetails';
import StudentPicker from '../components/MyWorkouts/StudentPicker';

const Stack = createStackNavigator();

export default function TrainingStack() {
  return (
    <Stack.Navigator
      initialRouteName="MyWorkouts"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#24292e',
        },
        headerTintColor: '#a9a9a9',
      }}
    >
      <Stack.Screen
        name="Meus Treinos"
        component={MyWorkouts}
        options={{
          headerTitleStyle: 'bold',
        }}
      />
      <Stack.Screen
        name="StudentPicker"
        component={StudentPicker}
        options={{
          title: 'Cadastrar Treinos',
          headerTitleStyle: 'bold',
        }}
      />
      <Stack.Screen
        name="TypeExercises"
        component={TypeExercises}
        options={{
          title: 'Meus Exercicios',
        }}
      />
      <Stack.Screen
        name="ExerciseDetails"
        component={ExerciseDetails}
        options={{
          title: 'Exercicios',
        }}
      />
    </Stack.Navigator>
  );
}
