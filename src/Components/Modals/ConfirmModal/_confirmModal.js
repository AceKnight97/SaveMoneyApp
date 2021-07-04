import {StyleSheet} from 'react-native';

const ConfirmModalStyle = StyleSheet.create({
  main: {
    padding: 24,
    display: 'flex',
    flexDirection: 'column',
    // alignItems: 'center',
    justifyContent: 'space-between',
    height: 200 - 58,
  },
  wraper: {
    display: 'flex',
    flexDirection: 'row',
  },
  main_title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  main_content: {
    fontSize: 18,
    marginLeft: 12,
  },
});

export default ConfirmModalStyle;
