import {StyleSheet} from 'react-native';
import {colors} from '../../../Constant/color';

const {green1, gray1} = colors;

const InputCTStyle = StyleSheet.create({
  inputCTMain: {
    width: '100%',
    backgroundColor: 'transparent',
  },
  titleView: {
    marginBottom: 4,
  },
  inputWrapper: {
    height: 40,
    width: '100%',

    borderColor: gray1,
    borderBottomWidth: 1,

    paddingHorizontal: 4,
    paddingVertical: 0,

    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputBasic: {
    fontSize: 14,
    color: 'black',
    textAlignVertical: 'top',
    flex: 1,
  },
  titleText: {
    color: 'black',
  },
  textAreaStyle: {
    height: 120,
    borderWidth: 1,
    justifyContent: 'flex-start',
  },
  activeBorder: {
    borderColor: green1,
  },
});
export default InputCTStyle;
