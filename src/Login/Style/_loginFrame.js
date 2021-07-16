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
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginTop: 48,
    paddingHorizontal: 24,
    // backgroundColor: 'green',
  },
  body: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    width: '80%',
    marginVertical: 12,
    flex: 1,
  },
  footer: {
    height: '10%',
    width: '80%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: 16,
    marginBottom: 24,
  },
});
export default LoginFrameStyle;
