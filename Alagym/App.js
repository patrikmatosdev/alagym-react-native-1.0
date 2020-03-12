import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
//import Routes from './src/pages/routes/Routes';
import RoutesBottom from './src/pages/routes/RoutesBottom';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle={"light-content"} />
      <RoutesBottom />
    </NavigationContainer>
  );
}

export default App;