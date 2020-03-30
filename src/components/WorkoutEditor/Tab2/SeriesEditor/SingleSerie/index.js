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
    count > 0 && setCount(count - 1);
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerSerie}>
        <View style={styles.containerLabel}>
          <Text style={styles.labelResult}>Serie 1</Text>
        </View>

        <View style={styles.containerOptions}>
          <TouchableOpacity
            onPress={removeCount}
            style={styles.containerButton}
          >
            <Icon name="remove-circle-outline" color={'#4b4'} size={28} />
          </TouchableOpacity>

          <View style={styles.containerResult}>
            <Text style={styles.labelResult}>{count}</Text>
          </View>

          <TouchableOpacity onPress={addCount} style={styles.containerButton}>
            <Icon name="add-circle-outline" color={'#4b4'} size={28} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
