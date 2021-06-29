import {StyleSheet} from 'react-native';

const DisplayDataStyle = StyleSheet.create({
  dd_wrapper: {
    flex: 1,
    width: '100%',
  },
  dd_title: {
    marginBottom: 4,
    fontSize: 20,
    lineHeight: 28,
    fontWeight: 'bold',
  },
  dd_main: {
    display: 'flex',
    flexDirection:'column'
  },
  dd_item: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dd_content: {
    fontSize: 14,
    padding: 6,
// backgroundColor:'red'
  },
  left_0: {
    width: '40%',
  },
  right_0: {
    width: '60%',
  },
  strip: {
    backgroundColor:'#f5f5f5',
  }
});

export default DisplayDataStyle;
