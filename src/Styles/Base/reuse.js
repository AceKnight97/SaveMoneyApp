import {StyleSheet} from 'react-native';
import {colors} from '../../Constant/color';

const {
  gray1,
}=colors;

const reuseStyle = StyleSheet.create({
  hitSlop10: {
    top: 10,
    bottom: 10,
    left: 10,
    right: 10,
  },
  divider_v: {
    height: '100%',
    width: 1,
    backgroundColor: gray1,
  },

  strip: {
    backgroundColor: '#f5f5f5',
  },
});

export default reuseStyle;
