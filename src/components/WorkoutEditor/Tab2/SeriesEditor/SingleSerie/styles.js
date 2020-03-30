import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    overflow: 'hidden',
  },

  containerSerie: {
    padding: 15,
    backgroundColor: '#fafafa',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },

  containerLabel: {
    flex: 1,
    //alignSelf: 'center',
  },

  containerOptions: {
    flex: 1,
    flexDirection: 'row',
  },

  containerButton: {
    flex: 1,
  },

  containerResult: {
    flex: 1,
    alignItems: 'center',
  },

  labelResult: {
    fontSize: 18,
    color: '#666',
  },
});

export default styles;
