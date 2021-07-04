import {StyleSheet} from 'react-native';
import {screenH} from '../../Constant';

const JournalDetailsStyle = StyleSheet.create({
  main: {
    height: screenH - 72 - 64,
    padding: 24,
    // display: 'flex'
  },
  footer_btns: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    marginVertical: 24,
  },
});
export default JournalDetailsStyle;
