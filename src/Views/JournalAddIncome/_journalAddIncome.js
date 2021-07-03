import {StyleSheet} from 'react-native';
import {screenH} from '../../Constant';

const JournalAddIncomeStyle = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 24,
    flex: 1,
    position: 'relative',
    justifyContent: 'space-between',
    height: screenH - 72 - 64,
  },
  main: {
    flex: 1,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  income_icon: {
    width: 250,
    height: 200,
    alignSelf: 'center',
  },
});

export default JournalAddIncomeStyle;
