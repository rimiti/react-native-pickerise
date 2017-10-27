import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  overlay: {
    flex: 1,
    padding: '5%',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  itemsContainer: {
    borderRadius: 5,
    flexShrink: 1,
    marginBottom: 8,
    padding: 8,
    backgroundColor: 'rgba(255,255,255,0.8)',
  },
  cancelContainer: {
    flexGrow: 1,
    maxHeight: 30,
    alignSelf: 'stretch',
  },
  selectStyle: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 8,
    borderRadius: 5,
  },
  selectTextStyle: {
    textAlign: 'center',
    color: '#333',
    fontSize: 16,
  },
  cancelStyle: {
    borderRadius: 5,
    backgroundColor: 'rgba(255,255,255,0.8)',
    padding: 8,
  },
  cancelTextStyle: {
    textAlign: 'center',
    color: '#333',
    fontSize: 16,
  },
  item: {
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemText: {
    textAlign: 'center',
    fontSize: 16,
    color: 'rgba(0,118,255,0.9)',
  },
  section: {
    padding: 8 * 2,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  sectionText: {
    textAlign: 'center',
    fontSize: 16,
  },
});
