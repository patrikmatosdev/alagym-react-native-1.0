import React from 'react';
import { View } from 'react-native';
import { TextInput, IconButton } from 'react-native-paper';
import TextInputMask from 'react-native-text-input-mask';
import { Icon } from 'react-native-elements';

export default function InputTextMask(props) {
  return (
    <TextInput
      //label={props.label}
      keyboardType={props.keyboardType}
      placeholder={props.placeholder}
      mode="outlined"
      theme={{
        roundness: 10,
        colors: {
          primary: '#ff8c00',
          background: '#ffff',
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
            <TextInputMask
              theme={{ colors: { primary: 'transparent' } }}
              {...propsInput}
              mask={props.mask}
            />
          </View>
        </View>
      )}
    />
  );
}
