import {StyleSheet} from 'react-native';
import {colors} from '../../../Constant/color';

const {blue6, gray1, red0} = colors;

const NewButtonStyle = StyleSheet.create({
  main: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    paddingVertical: 8,
    paddingHorizontal: 16,
    minWidth: 80,
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
  text_text_style: {},

  danger_style: {
    borderWidth: 1,
    borderColor: red0,
  },
  danger_text_style: {
    color: red0,
  },
});

export default NewButtonStyle;
