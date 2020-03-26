import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
import { Icon } from 'react-native-elements';
import IMG from '../../../../assets/img/background.jpeg';
import IMG2 from '../../../../assets/img/peitoral.png';

export default function SeriesEditor(props) {
  const value = props.value;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.boxImage}>
          <View style={styles.boxTitle}>
            <Text style={styles.title}>MUSCULO</Text>
          </View>
          <View style={styles.media}>
            <Image source={IMG2} style={styles.image} />
          </View>
        </View>

        <View style={styles.boxImage}>
          <View style={styles.boxTitle}>
            <Text style={styles.title}>EXERCICIO</Text>
          </View>
          <View style={styles.media}>
            <Image source={IMG} style={styles.image} />
          </View>
        </View>
      </View>

      <View style={styles.series}>
        <View style={styles.titleContent}>
          <View style={styles.titleOptions}>
            <Text style={styles.label}>séries</Text>
          </View>
          <View style={styles.titleOptions}>
            <Text style={styles.label}>repetições</Text>
          </View>
        </View>

        <View style={styles.optionsSeries}>
          <View style={styles.titleOptions}>
            <Text style={styles.label}>serie 1</Text>
          </View>

          <View style={styles.options}>
            <View style={styles.button}>
              <Icon name="remove-circle-outline" color={'#4b4'} size={32} />
            </View>
            <View style={styles.button}>
              <Text>16</Text>
            </View>
            <View style={styles.button}>
              <Icon name="add-circle-outline" color={'#4b4'} size={32} />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
