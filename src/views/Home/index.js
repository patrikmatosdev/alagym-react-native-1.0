import React from 'react';
import { Text, View, StatusBar, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Table from '../../components/Dashboard/Table';
import ImageTrainning from '../../components/Dashboard/ImageTrainning';
import { useNavigation } from '@react-navigation/native';


const styles = StyleSheet.create({
  Wrapper:{
    padding: 15,
    flex: 1,
    backgroundColor: '#FAFAFA',
  },

  Table: {
    marginVertical: 10,
    flex: 1,
  },

  Media:{
    flex: 1,  
  },

  Greeting: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#a9a9a9',
  },

  Name: {
    fontWeight: "bold",
    fontSize: 22,
    color: 'orange'
  }
})

export default function Home() {

  const navigation = useNavigation();
  const openTraining = routeName => {
    navigation.navigate(routeName);
  }

  return (
    <View style={styles.Wrapper}>
      <ScrollView>
        <View>
          <Text style={styles.Greeting}>Boa tarde,</Text>
          <Text style={styles.Name}>Patrik !</Text>
        </View>
        <View style={styles.Table}>
          <Table />
        </View>

        <View style={styles.Media}>
          <TouchableOpacity 
            style={styles.WrapperImg} 
            activeOpacity={.5} 
            onPress={()=> openTraining('Training')}
          >
          <ImageTrainning />
        </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}