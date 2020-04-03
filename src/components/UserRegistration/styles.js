import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
  },
  containerHeader: {
    flexBasis: 200,
    flexGrow: 0,
    flexShrink: 0,
    backgroundColor: '#24292e',
  },
  containerForm: {
    flex: 1,
    padding: 30,
  },
  image: {
    height: '100%',
    resizeMode: 'cover',
  },
});

export default styles;
