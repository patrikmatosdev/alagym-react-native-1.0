import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    paddingHorizontal: 15,
  },

  Title: {
    marginTop: 25,
    fontSize: 26,
    color: '#a9a9a9',
    fontWeight: 'bold',
  },

  Media: {
    borderRadius: 8,
    overflow: 'hidden',
    height: 130,
    marginTop: 15,
  },

  Label: {
    color: '#FAFAFA',
    fontWeight: 'bold',
    fontSize: 18,
  },

  Image: {
    position: 'relative',
    width: '100%',
    height: '100%',
  },

  ImageLabel: {
    position: 'absolute',
    bottom: 10,
    left: 15,
  },
});

export default styles;
