import * as React from 'react';
import {
  createStackNavigator,
  NavigationContainer,
} from '@react-navigation/stack';
import MyWorkouts from '../components/MyWorkouts/index';
import TypeExercises from '../components/MyWorkouts/TypeExercises';
import ExerciseDetails from '../components/MyWorkouts/ExerciseDetails';
import StudentPicker from '../components/MyWorkouts/StudentPicker';
import WorkoutEditor from '../components/WorkoutEditor/index';
import { IconButton, Button, Icon } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function TrainingStack() {
  const navigation = useNavigation();

  const openStudentsTraining = (routeName) => {
    navigation.navigate(routeName);
  };

  return (
    <Stack.Navigator
      initialRouteName="MyWorkouts"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#24292e',
        },
        headerTintColor: '#fafafa',
      }}
    >
      <Stack.Screen
        name="MyWorkouts"
        component={MyWorkouts}
        options={{
          title: 'Meus treinos',
          headerTitleStyle: 'bold',
        }}
      />
      <Stack.Screen
        name="WorkoutEditor"
        component={WorkoutEditor}
        options={{
          title: 'Editor de Treinos',
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

          headerRight: () => (
            <Button
              onPress={() => openStudentsTraining('WorkoutEditor')}
              icon="account-edit"
              mode="outlined"
              color="#fafafa"
              style={{ marginRight: 10, borderColor: '#fafafa' }}
              labelStyle={{ color: '#fafafa' }}
              contentStyle={{ backgroundColor: null }}
            >
              Editar
            </Button>
          ),
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
