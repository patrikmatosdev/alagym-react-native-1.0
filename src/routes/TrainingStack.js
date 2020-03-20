import * as React from 'react';
import { createStackNavigator,NavigationContainer } from '@react-navigation/stack';
import MyWorkouts from '../components/MyWorkouts/index';
import TypeExercises from '../components/MyWorkouts/TypeExercisies';
import TrainingDetail from '../components/MyWorkouts/TrainingDetail';

// const TrainingStack = (NavigationContainer(
//   createStackNavigator({
//     MyWorkouts: MyWorkouts,
//     TypeExercisies: TypeExercisies,
//   })
// ))

// export default TrainingStack;


const Stack = createStackNavigator();

export default function TrainingStack() {

  return (
    <Stack.Navigator
      initialRouteName="MyWorkouts"
      screenOptions={{ 
        headerStyle: {
          backgroundColor: '#24292e'
        }, 
        headerTintColor: '#a9a9a9',
      }
    }>
      <Stack.Screen
        name="Meus Treinos"
        component={MyWorkouts}
        options={{
          headerTitleStyle: 'bold'
        }}
      />

      <Stack.Screen
        name="TypeExercises"
        component={TypeExercises}
        options={{
          title: 'Meus Exercicios'
        }}
      />
      <Stack.Screen
        name="TrainingDetail"
        component={TrainingDetail}
        options={{
          title: 'Exercicios'
        }}
      />
    </Stack.Navigator>
  );
}
