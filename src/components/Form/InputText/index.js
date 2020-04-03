import React from 'react';
import { View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { Icon } from 'react-native-elements';

export default function InputText(props) {
  return (
    <TextInput
      label={props.label}
      keyboardType={props.keyboardType}
      placeholder={props.placeholder}
      mode="outlined"
      underlineColor="transparent"
      keyboardType="name-phone-pad"
      theme={{
        placeholder: {
          left: 20,
        },
        colors: {
          primary: '#ff8c00',
          background: '#ffff',
          underlineColor: 'transparent',
        },
      }}
      render={(propsInput) => (
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <View
            style={{
              flexGrow: 0,
              flexShrink: 0,
              flexBasis: 60,
              alignSelf: 'center',
            }}
          >
            <Icon name={props.icon} size={28} color="#ccc" />
          </View>
          <View style={{ flex: 1 }}>
            <TextInput
              {...propsInput}
              underlineColor="transparent"
              theme={{ colors: { primary: 'transparent' } }}
              style={{
                backgroundColor: 'transparent',
              }}
            />
          </View>
        </View>
      )}
    />
  );
}
