import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  Wrapper: {
    marginTop: 15,
    marginBottom: 10,
  },
  Title: {
    marginTop: 10,
    fontSize: 14,
    color: '#a9a9a9',
    fontWeight: 'bold',
  },
  WrapperImg: {
    marginTop: 3,
    height: 150,
    borderRadius: 6,
    overflow: 'hidden',
    backgroundColor: '#ccc',
  },
  File: {
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
  },
});

export default styles;
