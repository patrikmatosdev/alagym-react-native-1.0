import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import CardItem from '../../../CardItem';
import SingleSerie from './SingleSerie';
import ButtonEditor from './ButtonEditor';

export default function SeriesEditor(props) {
  const value = props.value;

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.containerMedia}>
          <CardItem />
          <CardItem />
        </View>
        <SingleSerie />
      </View>
      <View style={styles.containerButton}>
        <ButtonEditor />
      </View>
    </View>
  );
}
