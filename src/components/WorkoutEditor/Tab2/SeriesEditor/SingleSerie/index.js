import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import styles from './styles';

export default function SingleSerie() {
  const [count, setCount] = useState(1);

  const addCount = () => {
    setCount(count + 1);
  };

  const removeCount = () => {
    setCount(count - 1);
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <View style={styles.title}>
          <Text style={styles.label}>séries</Text>
        </View>
        <View style={styles.title}>
          <Text style={styles.label}>repetições</Text>
        </View>
      </View>

      <View style={styles.containerSerie}>
        <View style={styles.containerLabel}>
          <Text style={styles.labelResult}>Serie 1</Text>
        </View>
        <View style={styles.containerOptions}>
          <TouchableOpacity onPress={removeCount}>
            <View style={styles.containerButton}>
              <Icon name="remove-circle-outline" color={'#4b4'} size={28} />
            </View>
          </TouchableOpacity>
          <View style={styles.containerResult}>
            <Text style={styles.labelResult}>{count}</Text>
          </View>
          <View style={styles.containerButton}>
            <TouchableOpacity onPress={addCount}>
              <Icon name="add-circle-outline" color={'#4b4'} size={28} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
