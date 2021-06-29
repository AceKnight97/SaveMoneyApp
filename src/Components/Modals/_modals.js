import {StyleSheet} from 'react-native';
import { screenW } from '../../Constant';

const ModalStyles = StyleSheet.create({
  mainViewBot: {
    display: 'flex',
    flexDirection: 'column',
    padding: 24,
    backgroundColor: 'white',
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,
  },
  mainViewMid: {
    // display: 'flex',
    backgroundColor: 'white',
    width: screenW - 48,
    borderRadius: 8,
    minHeight:200,
    // justifyContent: 'center',
    // alignItems: 'center',
    // padding: 12,
  },
});

export default ModalStyles;
