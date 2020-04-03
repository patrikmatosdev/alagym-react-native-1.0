import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    flexDirection: 'column',
    backgroundColor: '#24292e',
  },
  containerHeader: {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: 330,
    alignItems: 'center',
    justifyContent: 'center',
  },

  containerItems: {
    flex: 1,
  },

  containerInputs: {
    paddingVertical: 20,
  },

  containerButtonsText: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },

  containerSocial: {
    paddingVertical: 30,
  },

  boxInput: {
    marginBottom: 20,
  },
  boxButton: {
    marginRight: 15,
  },
});

export default styles;
