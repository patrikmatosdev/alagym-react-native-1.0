import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },

  content: {
    flex: 1,
  },

  containerCard: {
    flex: 1,
    alignItems: 'center',
  },

  containerMedia: {
    flex: 1,
    flexDirection: 'row',
  },

  containerButton: {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: 80,
  },

  containerTitle: {
    padding: 15,
    backgroundColor: 'green',
    flexDirection: 'row',
  },

  boxTitle: {
    flex: 1,
  },

  labelTitle: {
    fontSize: 18,
    color: '#fafafa',
  },
});

export default styles;
