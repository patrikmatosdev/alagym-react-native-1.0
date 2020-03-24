import React from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import Table from '../../components/Dashboard/Table/';
import { useNavigation } from '@react-navigation/native';
import TouchableTrainning from '../../components/Dashboard/TouchableImage/index';
import styles from './styles';

export default function Home() {
  const navigation = useNavigation();
  const openTraining = (routeName) => {
    navigation.navigate(routeName);
  };

  return (
    <View style={styles.Wrapper}>
      <ScrollView>
        <View>
          <Text style={styles.Greeting}>Boa tarde,</Text>
          <Text style={styles.Name}>Patrik !</Text>
        </View>
        <View style={styles.Table}>
          <Table />
        </View>

        <View style={styles.Media}>
          <TouchableOpacity
            style={styles.WrapperImg}
            activeOpacity={0.5}
            onPress={() => openTraining('Training')}
          >
            <TouchableTrainning />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
