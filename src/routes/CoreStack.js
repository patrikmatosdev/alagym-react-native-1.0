import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomStack from './BottomStack';
import LoginStack from './LoginStack';

const Stack = createStackNavigator();

export default function CoreStack() {
  return (
    <Stack.Navigator
      initialRouteName="LoginStack"
      tabBarColor="#ffff"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#24292e',
        },
        headerTintColor: '#fafafa',
      }}
    >
      <Stack.Screen
        name="LoginStack"
        component={LoginStack}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="BottomStack"
        component={BottomStack}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
