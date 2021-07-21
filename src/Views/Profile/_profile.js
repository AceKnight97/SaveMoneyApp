import {StyleSheet} from 'react-native';
import {colors} from '../../Constant/color';

const {red1, green, green1} = colors;

const ProfileStyle = StyleSheet.create({
  profile_wrapper: {
    flex: 1,
    width: '100%',
  },
  profile_header: {
    display: 'flex',
    flexDirection: 'row',
  },
  profile_header_right: {
    flex: 1,
    marginLeft: 12,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
  },
});

export default ProfileStyle;
