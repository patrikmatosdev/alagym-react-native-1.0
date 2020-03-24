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
    flexDirection: 'row',
  },

  Serie: {
    fontSize: 14,
    color: '#ffa500',
  },

  Color: {
    width: 10,
    height: 10,
    borderRadius: 50,
    backgroundColor: 'green',
    marginHorizontal: 15,
    marginTop: 5,
  },

  Machine: {
    fontWeight: 'bold',
    color: '#CCC',
  },
});

export default styles;
