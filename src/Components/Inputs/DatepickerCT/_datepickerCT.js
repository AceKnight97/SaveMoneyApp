import {StyleSheet} from 'react-native';
import {colors} from '../../../Constant/color';

const {green1} = colors;

const DatepickerCTStyle = StyleSheet.create({
  main: {},
  titleView: {
    marginBottom: 4,
  },
  titleText: {
    color: 'black',
  },
  controlStyle: {
    backgroundColor: 'white',
    borderWidth: 0,
    borderBottomWidth: 1,
    color: 'black',
    paddingHorizontal: 0,
  },
  activeBorder: {
    borderColor: green1,
  },
});
export default DatepickerCTStyle;
