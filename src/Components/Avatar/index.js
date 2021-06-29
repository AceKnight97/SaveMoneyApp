import PropTypes from 'prop-types';
import React from 'react';
import {Text, View} from 'react-native';
import AvatarStyle from './_avatar';

const {avatar_wrapper, avatar_text} = AvatarStyle;

const Avatar = (props) => {
  const {style, name} = props;
  return (
    <View style={avatar_wrapper}>
      <Text style={avatar_text}>{name[0].toUpperCase()}</Text>
    </View>
  );
};
Avatar.defaultProps = {
  style: {},
  name: 'A',
};
Avatar.propTypes = {
  name: PropTypes.string,
  style: PropTypes.shape(),
};

export default Avatar;
