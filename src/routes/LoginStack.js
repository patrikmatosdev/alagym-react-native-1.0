import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../components/Login/index';
import UserRegistration from '../components/UserRegistration/index';

const Stack = createStackNavigator();

export default function LoginStack() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      tabBarColor="#ffff"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#24292e',
        },
        headerTintColor: '#fafafa',
      }}
    >
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="UserRegistration"
        component={UserRegistration}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
