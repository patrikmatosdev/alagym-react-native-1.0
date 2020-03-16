import React from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';


const styles = StyleSheet.create({
  Wrapper: {
    marginTop: 10,
    marginBottom: 10,
  },
  Title: {
    marginTop: 10,
    fontSize: 14,
    color: '#a9a9a9',
    fontWeight: 'bold',
  },
  WrapperImg: {
    height: 150,
    
  },
  File: {
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
    flex: 1,
  }
})

export default function ProxTrainning(props) {

  const openTrainning = () => {
    props.navigation.navigate('Trainning', {
      mensagem: "E ai, mensagem da HOME"
    });
  }

  return (
    <View style={styles.Wrapper}>
      <Text style={styles.Title}>
        Próximos Treinos
      </Text>
      <View style={styles.WrapperImg}>
        <Image 
          source={require('./../../assets/img/person-holding.jpg')} 
          style={styles.File}
          onPress={openTrainning} 
        />
      </View>
    </View>
  )
}