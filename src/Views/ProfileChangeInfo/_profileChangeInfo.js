import {StyleSheet} from 'react-native';
import {screenH, screenW} from '../../Constant';

const ProfileChangeInfoStyle = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 24,
    flex: 1,
    position: 'relative',
    justifyContent: 'space-between',
  },
  main: {
    height: screenH - 72 - 64 - 25 - 24,
    // backgroundColor: 'red',
    // height:
    width: '100%',
    // height: '100%',
    // backgroundColor: 'red',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});

export default ProfileChangeInfoStyle;
