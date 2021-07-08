import {StyleSheet} from 'react-native';
import {colors} from '../../../Constant/color';
const {gray1, green, green0, green00, field, gray3, red2} = colors;

const ButtonCTStyle = StyleSheet.create({
  buttonCTMain: {
    minWidth: 120,
    height: 40,
    borderRadius: 4,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    paddingHorizontal: 24,
    // borderWidth: 1
  },
  basicText: {
    color: 'white',
    // fontSize: 18
  },
  noneView: {
    // borderWidth: 1,
  },
  noneText: {
    color: green0,
  },
  onPressBasView: {
    position: 'absolute',
    zIndex: -1,
    width: '100%',
  },
  borderView: {
    backgroundColor: green,
    borderRadius: 16,
    width: '100%',
  },
  borderText: {
    color: 'white',
  },
  roundView: {
    backgroundColor: green,
    borderRadius: 100,
    width: '100%',
  },
  roundText: {
    color: 'white',
  },
  //
});

export default ButtonCTStyle;
