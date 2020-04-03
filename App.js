import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import AppStack from './src/pages/routes/AppStack';
import BottomStack from './src/routes/BottomStack';
import LoginStack from './src/routes/LoginStack';
import CoreStack from './src/routes/CoreStack';
const App = () => {
  const loading = false;

  return (
    <>
      {/*
        <NavigationContainer>
          <AppStack />
        </NavigationContainer>
      */}

      <NavigationContainer>
        <StatusBar barStyle="dark-content" backgroundColor="#24292e" />
        {false && (loading == true ? <BottomStack /> : <LoginStack />)}
        <CoreStack />
      </NavigationContainer>
    </>
  );
};

export default App;
