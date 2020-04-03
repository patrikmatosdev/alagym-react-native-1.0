import React from 'react';
import { View } from 'react-native';
import Loading from '../../views/Loading';
import { IconButton } from 'react-native-paper';
import { Input, Button, SocialIcon } from 'react-native-elements';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import InputTextMask from '../Form/InputTextMask';

export default function Login() {
  const navigation = useNavigation();

  const openUserRegistration = (routeName) => {
    navigation.navigate(routeName);
  };

  return (
    <View style={styles.container}>
      <Loading />

      <View style={styles.containerItems}>
        <View style={styles.boxInput}>
          <InputTextMask
            label="CPF"
            icon="person"
            placeholder="999.999.999-99"
            mask="[000].[000].[000]-[00]"
            maxLength={11}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.boxButton}>
          <Button
            title="Entrar"
            titleStyle={{ color: '#ffff' }}
            type="clear"
            //icon={<Icon name="account-box" size={28} color="#fff" />}
            onPress={() => alert('Em Desenvolvimento..')}
          />
          <Button
            title="Cadastrar"
            titleStyle={{ color: '#ffff' }}
            type="clear"
            //icon={<Icon name="account-box" size={28} color="#fff" />}
            onPress={() => openUserRegistration('UserRegistration')}
          />
        </View>

        <SocialIcon
          type="facebook"
          button={true}
          raised={true}
          title="Login com facebook"
        />
      </View>
    </View>
  );
}
