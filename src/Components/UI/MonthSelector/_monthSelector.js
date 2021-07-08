import {StyleSheet} from 'react-native';

const MonthSelectorStyle = StyleSheet.create({
  main: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 24,
  },
});

export default MonthSelectorStyle;
