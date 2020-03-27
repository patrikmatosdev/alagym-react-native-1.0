import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    flexDirection: 'column',
    borderRadius: 5,
    overflow: 'hidden',
  },

  containerTitle: {
    padding: 10,
    backgroundColor: 'green',
    flexDirection: 'row',
  },

  title: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },

  label: {
    fontSize: 18,
    color: '#fafafa',
  },

  containerSerie: {
    flex: 1,
    padding: 15,
    backgroundColor: '#ddd',
    flexDirection: 'row',
    justifyContent: 'center',
  },

  containerLabel: {
    flex: 1,
    alignSelf: 'center',
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
