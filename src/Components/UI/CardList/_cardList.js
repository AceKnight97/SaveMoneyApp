import {StyleSheet} from 'react-native';
import {screenW} from '../../../Constant';

const CardListStyle = StyleSheet.create({
  main: {
    width: screenW,
    padding: 24,
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    // height: screenH - 72,
    // marginBottom: 24,
  },
  list_view: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 24,
  },
});
export default CardListStyle;
