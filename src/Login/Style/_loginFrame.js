import {StyleSheet} from 'react-native';
import {colors} from '../../Constant/color';

const LoginFrameStyle = StyleSheet.create({
  frameWarpper: {
    backgroundColor: 'white',
    paddingVertical: '7.5%',
    flex: 1,
    height: '100%',
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
    // color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
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