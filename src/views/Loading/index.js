import React from 'react';
import { SafeAreaView, Text, View, StyleSheet } from 'react-native';
import Lottie from 'lottie-react-native';

import Fitness from '../../util/lottie-alagym-dark.json';

export default function Loading() {
  return (
    <View styles={styles.container}>
      <Lottie resizeMode="contain" autoSize source={Fitness} autoPlay loop />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
