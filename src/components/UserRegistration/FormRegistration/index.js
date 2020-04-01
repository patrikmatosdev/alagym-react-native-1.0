import React from 'react';
import { Input, Button } from 'react-native-elements';
import { IconButton } from 'react-native-paper';
import { View } from 'react-native';
import styles from './styles';

export default function FormRegistration() {
  return (
    <View style={styles.container}>
      <View style={styles.boxInput}>
        <Input
          label="Nome"
          labelStyle={{ color: '#ff8c00' }}
          placeholder="Patrik Feitosa Matos"
          leftIcon={<IconButton icon="emoticon-happy" size={28} color="#ccc" />}
        />
      </View>
      <View style={styles.boxInput}>
        <Input
          label="CPF"
          labelStyle={{ color: '#ff8c00' }}
          placeholder="999.999.999-99"
          leftIcon={<IconButton icon="numeric" size={28} color="#ccc" />}
        />
      </View>
      <View style={styles.boxInput}>
        <Input
          label="Telefone"
          labelStyle={{ color: '#ff8c00' }}
          placeholder="(11) 99999-9999"
          leftIcon={<IconButton icon="cellphone" size={28} color="#ccc" />}
        />
      </View>
      <View style={styles.boxInput}>
        <Input
          label="Email"
          labelStyle={{ color: '#ff8c00' }}
          placeholder="alagym@email.com"
          leftIcon={<IconButton icon="email" size={28} color="#ccc" />}
        />
      </View>
      <View style={styles.boxInput}>
        <Input
          label="Senha"
          labelStyle={{ color: '#ff8c00' }}
          placeholder="***************"
          leftIcon={<IconButton icon="lock" size={28} color="#ccc" />}
        />
      </View>
    </View>
  );
}
