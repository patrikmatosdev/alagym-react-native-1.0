import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import CardItem from '../../../CardItem';
import SingleSerie from './SingleSerie';
import ButtonEditor from './ButtonEditor';
import { ScrollView } from 'react-native-gesture-handler';

export default function SeriesEditor(props) {
  const value = props.value;

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.containerMedia}>
          <View style={styles.containerCard}>
            <CardItem />
          </View>
          <View style={styles.containerCard}>
            <CardItem />
          </View>
        </View>
        <View style={styles.containerSeries}>
          <View style={styles.containerTitle}>
            <View style={styles.boxTitle}>
              <Text style={styles.labelTitle}>séries</Text>
            </View>
            <View style={styles.boxTitle}>
              <Text style={styles.labelTitle}>repetições</Text>
            </View>
          </View>
          <ScrollView>
            <>
              <SingleSerie />
              <SingleSerie />
              <SingleSerie />
              <SingleSerie />
            </>
          </ScrollView>
        </View>
      </View>
      <View style={styles.containerButton}>
        <ButtonEditor />
      </View>
    </View>
  );
}
