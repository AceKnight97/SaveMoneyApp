import {StyleSheet} from 'react-native';

const BottomAppHeaderStyle = StyleSheet.create({
  bah_wrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    height: 72,
    borderBottomColor: '#d9d9d9',
    borderBottomWidth: 1,
  },
  bah_title: {
    fontSize: 18,
    fontWeight: 'bold',
    maxWidth: '50%',
    // width: 200,
    // backgroundColor: 'red',
  },
});

export default BottomAppHeaderStyle;
