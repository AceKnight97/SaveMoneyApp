import {StyleSheet} from 'react-native';
import {colors} from '../../../Constant/color';

const {gray1, field,

} = colors;

const IconButtonStyle = StyleSheet.create({
  main: {
    width: 36,
    height: 36,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0,
    padding: 0,
    borderWidth: 1,
    borderColor: gray1,
    borderRadius: 6,
  },
  disabled_style: {
    backgroundColor: field,
  },
});

export default IconButtonStyle;
