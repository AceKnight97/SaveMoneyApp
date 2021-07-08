import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {SvgXml} from 'react-native-svg';

import GlobalStyles from '../../../Styles';
import {colors} from '../../../Constant/color';
import {screenW} from '../../../Constant';
import IconButtonStyle from './_iconButton';

const {flexRowAligCent, hitSlop10} = GlobalStyles;
const {main, disabled_style} = IconButtonStyle;

const IconButton = (props)=>{
  const {icon, onPress, style, iconSty, disabled} = props;
  return (
    <TouchableOpacity
      disabled={disabled}
      hitSlop={hitSlop10}
      style={[main, disabled ? disabled_style : {}, style]}
      onPress={onPress}
    >
      <SvgXml xml={icon} style={iconSty} />
    </TouchableOpacity>
  );
};

IconButton.defaultProps = {
  onPress: () => {},
  style: {},
  iconSty: {},
  disabled: false,
};
IconButton.propTypes = {
  onPress: PropTypes.func,
  style: PropTypes.shape(),
  iconSty: PropTypes.shape(),
  icon: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};

export default IconButton;
