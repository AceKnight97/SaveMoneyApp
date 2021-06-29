import {StyleSheet} from 'react-native';

const AvatarStyle = StyleSheet.create({
  avatar_wrapper: {
    width: 120,
    height: 120,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    backgroundColor: 'red',
    backgroundColor: '#d9f7be',
  },
  avatar_text: {
    fontWeight: 'bold',
    fontSize: 46,
    color: '#52c41a',
    textAlign: 'center',
  },
});

export default AvatarStyle;
