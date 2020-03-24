import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  box: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 300,
  },

  exerciseBox: {
    width: 350,
    height: 300,
    backgroundColor: '#f0f',
    borderRadius: 10,
    overflow: 'hidden',
  },

  imageBox: {
    flex: 2,
    backgroundColor: '#ccc',
    zIndex: 1,
  },

  image: {
    width: '100%',
    height: '100%',
  },

  contentBox: {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: 150,
    backgroundColor: '#fafafa',
  },

  buttonBox: {
    flex: 0,
    marginTop: -25,
    marginBottom: -25,
    //marginTop: -25,
    zIndex: 20,
    alignSelf: 'center',
  },

  button: {
    paddingHorizontal: 70,
    height: 50,
    backgroundColor: '#24292e',
    borderRadius: 10,
  },

  description: {
    flex: 1,
    padding: 15,
  },

  titleBox: {
    marginTop: 25,
  },

  title: {
    fontSize: 24,
    color: '#ff8c00',
    fontWeight: 'bold',
  },

  instruction: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  instructionsBox: {
    flex: 1,
  },

  instructionTitle: {
    color: 'orange',
    fontSize: 18,
    fontWeight: 'bold',
  },

  label: {
    fontWeight: 'bold',
    color: '#a9a9a9',
    fontSize: 16,
  },
});

export default styles;
