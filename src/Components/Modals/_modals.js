import {StyleSheet} from 'react-native';
import {screenW} from '../../Constant';
import {colors} from '../../Constant/color';

const {gray1} = colors;

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
    // minHeight: 400,
    height: 400,
  },
  header_title: {
    fontWeight: 'bold',
    fontSize: 18,
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: gray1,
  },
  body_view: {
    padding: 24,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 400 - 58,
  },
});

export default ModalStyles;
