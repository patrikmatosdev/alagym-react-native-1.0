import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    marginHorizontal: 15,
    paddingVertical: 20,
    backgroundColor: '#fafafa',
    borderRadius: 7,
    overflow: 'hidden',
    flexDirection: 'column',
  },

  header: {
    flexDirection: 'row',
  },

  boxImage: {
    flex: 1,
    alignItems: 'center',
  },

  boxTitle: {
    marginBottom: 5,
  },

  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#666',
  },

  media: {
    width: 150,
    height: 150,
    borderRadius: 7,
    overflow: 'hidden',
  },

  image: {
    width: '100%',
    height: '100%',
  },

  series: {
    marginTop: 20,
    flexDirection: 'column',
  },

  titleContent: {
    flexDirection: 'row',
  },

  titleOptions: {
    flex: 1,
    paddingHorizontal: 10,
  },

  optionsSeries: {
    flex: 1,
    backgroundColor: '#ddd',
    padding: 15,
    flexDirection: 'row',
  },

  options: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },

  button: {
    flex: 1,
    marginHorizontal: 10,
  },

  label: {
    fontSize: 18,
    color: '#CCC',
  },
});

export default styles;
