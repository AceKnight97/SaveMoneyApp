import {StyleSheet} from 'react-native';

const flexBox = StyleSheet.create({
  flexColumn: {
    display: 'flex',
    flexDirection: 'column',
  },
  rwrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  cent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerC1: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  centerR1: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  centerC: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  centerR: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  flexRowAligCent: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  frsb: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  flexJusCent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  f1_wh_100: {
    flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
    // padding: '5%',
  },
  textAlignC: {
    textAlign: 'center',
  },
  f_1: {
    flex: 1,
  },
  // WH
  w_100: {
    width: '100%',
  },
});

export default flexBox;
