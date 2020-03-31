import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import Lottie from 'lottie-react-native';

import Fitness from '../../util/lottie-alagym-dark.json';

export default function Loading() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Lottie resizeMode="contain" autoSize source={Fitness} autoPlay loop />
      <Text style={styles.title}>Carregando...</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#24292e',
  },

  title: {
    marginTop: 20,
    fontSize: 20,
    color: '#fafafa',
    fontWeight: 'bold',
  },
});
