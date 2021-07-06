import {
  StyleSheet,
} from 'react-native';


const SearchAddressStyle = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 16,
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    height: 48,
    marginBottom: 24,
    // flex: 1,
  },
  //
  textInputContainer: {
    backgroundColor: 'rgba(0,0,0,0)',
    borderColor: '#E5EAEB',
    marginHorizontal: 16,
    borderRadius: 4,
    borderWidth: 1,
    borderTopColor: '#E5EAEB',
    borderBottomColor: '#E5EAEB',
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  textInput: {
    fontFamily: 'OpenSans-Regular',
    color: '#003340',
    fontSize: 16,
  },
  description: {
    fontSize: 16,
    fontFamily: 'OpenSans-Regular',
    color: '#003340',
    alignSelf: 'center',
    paddingHorizontal: 16,
  },
  row: {
    height: 'auto',
  },
});

export default SearchAddressStyle;
