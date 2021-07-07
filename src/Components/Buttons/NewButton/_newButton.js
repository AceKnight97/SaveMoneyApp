import {StyleSheet} from 'react-native';
import {screenH} from '../../../Constant';
import {colors} from '../../../Constant/color';

const {blue6, gray1, red0, disabledColor, disabledBg, disabledBorder} = colors;

const NewButtonStyle = StyleSheet.create({

  main: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    paddingVertical: 8,
    paddingHorizontal: 16,
    minWidth: 80,
    height: 40,
  },
  main_text: {
    fontSize: 16,
  },

  primary_style: {
    backgroundColor: blue6,
  },
  primary_text_style: {
    color: 'white',
  },

  text_style: {
    borderWidth: 1,
    borderColor: gray1,
  },
  text_text_style: {
    color: 'black',
  },

  danger_style: {
    borderWidth: 1,
    borderColor: red0,
  },
  danger_text_style: {
    color: red0,
  },
  disabled_style: {
    backgroundColor: disabledBg,
    borderColor: disabledBorder,
  },
  disabled_text_style: {
    color: disabledColor,
  },
});

export default NewButtonStyle;
