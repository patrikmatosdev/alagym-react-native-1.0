import React from 'react';
import { View, ScrollView } from 'react-native';
import Loading from '../../views/Loading';
import { Button, SocialIcon } from 'react-native-elements';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import InputTextMask from '../Form/InputTextMask';
import InputText from '../Form/InputText/index';

export default function Login() {
  const navigation = useNavigation();

  const openUserRegistration = (routeName) => {
    navigation.navigate(routeName);
  };

  const openDashboard = (routeName) => {
    navigation.navigate(routeName);
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <Loading />
      </View>

      <View style={styles.containerItems}>
        <View style={styles.containerInputs}>
          <View style={styles.boxInput}>
            <InputTextMask
              label="CPF"
              icon="person"
              placeholder="CPF: 999.999.999-99"
              mask="[000].[000].[000]-[00]"
              maxLength={11}
              keyboardType="numeric"
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
        </View>

        <View style={styles.containerButtonsText}>
          <View style={styles.boxButton}>
            <Button
              title="Entrar"
              titleStyle={{ color: '#ffff' }}
              type="clear"
              //icon={<Icon name="account-box" size={28} color="#fff" />}
              onPress={() => alert('Em Desenvolvimento..')}
            />
          </View>
          <View style={styles.boxButton}>
            <Button
              title="Cadastrar"
              titleStyle={{ color: '#ffff' }}
              type="clear"
              //icon={<Icon name="account-box" size={28} color="#fff" />}
              onPress={() => openUserRegistration('UserRegistration')}
            />
          </View>
        </View>

        <View style={styles.containerSocial}>
          <SocialIcon
            type="facebook"
            button={true}
            raised={true}
            title="Login com facebook"
            onPress={() => openDashboard('BottomStack')}
          />
          <SocialIcon
            type="instagram"
            button={true}
            raised={true}
            title="Login com Instagram"
          />
        </View>
      </View>
    </View>
  );
}
