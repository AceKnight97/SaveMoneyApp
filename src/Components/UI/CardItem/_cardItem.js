import {StyleSheet} from 'react-native';
import {screenW} from '../../../Constant';

const CardItemStyle = StyleSheet.create({
  main: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '32%',
    height: 150,
    marginTop: 6,
    borderRadius: 8,
    backgroundColor: 'red',
  },
  title_style: {
    fontWeight: 'bold',
    fontSize: 14,
    paddingBottom: 2,
    color: 'white',
  },
  money_style: {
    color: 'gold',
    fontSize: 16,
    paddingTop: 2,
  },
  mainView: {
    width: screenW / 3 - 20,
    height: screenW / 3 - 20,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  touchSty: {
    borderRadius: 8,
    width: screenW / 3 - 20,
    height: screenW / 3 - 20,
  },
  colorWhite: {
    color: 'white',
  },
});
export default CardItemStyle;
