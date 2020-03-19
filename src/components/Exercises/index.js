import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  Exercise: {
    flexDirection: 'row',
    borderWidth: 0.5,
    borderTopColor: '#CCC',
  },

  Description: {
    padding: 15,
  },

  Image: {
    width: 80,
    height: 80,
  },

  Title: {
    color: '#FAFAFA',
    fontSize: 18,
  },

  Information: {
    marginTop: 5,
    flexDirection: 'row'
  },

  Serie: {
    fontSize: 14,
    color: '#ffa500',
  },

  Color:{
    width: 10,
    height: 10,
    borderRadius: 50,
    backgroundColor: 'green',
    marginHorizontal: 15,
    marginTop: 5,
  },

  Machine: {
    fontWeight: "bold",
    color: '#CCC',
  }
})

export default function Exercise(props) {
  
  const onPress = () => {
    props.onPress(props.title);
  }

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.Exercise} >
        <Text style={{color: '#FAFAFA'}}>{JSON.stringify(props.onPress)}</Text>
        <Image
          source={{uri: props.image}}
          resizeMode='cover'
          style={styles.Image}
        />
        <View style={styles.Description}>
          <Text style={styles.Title}>{props.title}</Text>
          <View style={styles.Information}>
            <Text style={styles.Serie}>{props.serie}x {props.repetitions}</Text>
            <Image style={styles.Color} />
            <Text style={styles.Machine}>{props.machine}</Text>  
          </View>
        </View>
      </View>
    </TouchableOpacity>   
  );
}