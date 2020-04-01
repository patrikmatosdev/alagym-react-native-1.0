import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
  },
  containerHeader: {
    flexBasis: 150,
    flexGrow: 0,
    flexShrink: 0,
    backgroundColor: '#24292e',
  },
  containerForm: {
    flex: 1,
  },
  image: {
    height: '100%',
    resizeMode: 'cover',
  },
  containerButtons: {
    padding: 10,
  },
  button: {
    marginBottom: 10,
  },
});

export default styles;
