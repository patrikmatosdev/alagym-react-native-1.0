import React from 'react';
import { Input, Button } from 'react-native-elements';
import { IconButton } from 'react-native-paper';
import { View, ScrollView } from 'react-native';
import styles from './styles';
import InputText from '../../Form/InputText';
import InputTextMask from '../../Form/InputTextMask/index';

export default function FormRegistration() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.boxInput}>
          <InputText
            label="Nome Completo"
            icon="face"
            placeholder="Patrik Feitosa Matos"
            keyboardType="name-phone-pad"
          />
        </View>
        <View style={styles.boxInput}>
          <InputTextMask
            label="CPF"
            icon="person"
            placeholder="999.999.999-99"
            mask="[000].[000].[000]-[00]"
            keyboardType="numeric"
          />
        </View>
        <View style={styles.boxInput}>
          <InputTextMask
            label="Telefone"
            icon="smartphone"
            placeholder="(99)99999-9999"
            mask="([00]) [00000]-[0000]"
            keyboardType="numeric"
          />
        </View>
        <View style={styles.boxInput}>
          <InputText
            label="Email"
            placeholder="email@email.com"
            icon="mail"
            keyboardType="email-address"
          />
        </View>
        <View style={styles.boxInput}>
          <InputText
            label="Senha"
            placeholder="************"
            icon="vpn-key"
            keyboardType="name-phone-pad"
          />
        </View>
        <View style={styles.boxButton}>
          <Button
            onPress={() => alert('Em Desenvolvimento...')}
            title="Criar Conta"
            titleStyle={{ color: '#ffffff' }}
            buttonStyle={{ backgroundColor: '#24292e', borderRadius: 20 }}
            type="solid"
          />
        </View>
      </View>
    </ScrollView>
  );
}
