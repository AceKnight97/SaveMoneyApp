import {StyleSheet} from 'react-native';
import {screenH} from '../../Constant';
import {colors} from '../../Constant/color';

const LoginFrameStyle = StyleSheet.create({
  frameWarpper: {
    backgroundColor: 'white',
    paddingVertical: '7.5%',
    // flex: 1,
    height: screenH,
    width: '100%',
  },
  header: {
    height: '20%',
    width: '80%',
    borderRadius: 8,
  },
  headerText: {
    fontSize: 48,
    color: colors.green1,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 48,
    // backgroundColor: 'green',
  },
  body: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    width: '80%',
  },
  footer: {
    height: '10%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});
export default LoginFrameStyle;
