import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },

  content: {
    flex: 1,
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
});

export default styles;
