import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import AppStack from './src/pages/routes/AppStack';
import BottomStack from './src/routes/BottomStack';
import LoadingView from './src/views/Loading/index';

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
        {loading == true ? <BottomStack /> : <LoadingView />}
      </NavigationContainer>
    </>
  );
};

export default App;
