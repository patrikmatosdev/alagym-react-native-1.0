import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import AppStack from './src/pages/routes/AppStack';
import BottomStack from './src/routes/BottomStack';

const App = () => {
  const logado = true;

  return (
    <>
      {/*
        <NavigationContainer>
          <AppStack />
        </NavigationContainer>
      */}

      <NavigationContainer>
        {!!logado && <BottomStack />}
      </NavigationContainer>
    </>
  );
}

export default App;