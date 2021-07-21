import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import {
  Text, TouchableOpacity, View, ActivityIndicator,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {colors, colorsLinear} from '../../../Constant/color';
import GlobalStyles from '../../../Styles';
import ButtonCTStyle from './_buttonCT';

const {flexRowAligCent} = GlobalStyles;
const {gray1, green, green0, green00, field, gray3, red2} = colors;
const {lush} = colorsLinear;

const {
  buttonCTMain,
  basicText,

  noneView,
  noneText,

  onPressBasView,

  borderView,
  borderText,

  roundView,
  roundText,
} = ButtonCTStyle;

const ButtonCT = (props)=> {
  const {
    title,
    onPress,
    style,
    userTextStyle,
    disabled,
    type,
    mainViewStyle,
    colorsCT,
    isDanger,
    loading,
  } = props;

  let colorCT = ['transparent', 'transparent'];
  let btnView;
  let textStyle = {};
  let onPressView;
  let onPressText = {};
  switch (type) {
    case 'LINEAR':
      colorCT = colorsCT.length !== 0 ? colorsCT : lush;
      onPressView = {backgroundColor: green};
      onPressText = {color: 'white'};
      break;
    case 'ROUND':
      btnView = roundView;
      textStyle = roundText;
      onPressView = {backgroundColor: green00};
      onPressText = {color: green};
      break;
    case 'BORDER':
      btnView = borderView;
      textStyle = borderText;
      onPressView = {backgroundColor: green00};
      onPressText = {color: green};
      break;
    case 'NONE':
      btnView = noneView;
      if (disabled) {
        textStyle={color: gray3};
      } else if (isDanger) {
        textStyle = {color: red2};
        onPressText = {color: red2};
      } else {
        textStyle = noneText;
        onPressText = {color: green};
      }
      break;
    default:
      break;
  }

  if (isDanger) {
    onPressText = {color: red2};
  }

  if (disabled) {
    if (type !== 'NONE') {
      _.assign(btnView, {backgroundColor: field});
    }
    if (type === 'LINEAR') {
      colorCT = [field, field];
    }
    _.assign(textStyle, {color: gray3});
  }
  return (
    <View style={[flexRowAligCent, {position: 'relative'}, mainViewStyle]}>
      <TouchableOpacity
        activeOpacity={0}
        hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
        onPress={onPress}
        disabled={disabled}
        style={flexRowAligCent}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          colors={colorCT}
          style={[buttonCTMain, btnView, style]}>
          {
            loading? <ActivityIndicator color='#ffffff' />:
            <Text style={[basicText, textStyle, userTextStyle]}>{title}</Text>}
        </LinearGradient>
      </TouchableOpacity>

      <View
        style={[onPressBasView, buttonCTMain, btnView, onPressView, style]}>
        {
            loading? <ActivityIndicator />:
          <Text style={[basicText, userTextStyle, onPressText]}>{title}</Text>}
      </View>
    </View>
  );
};
ButtonCT.defaultProps = {
  title: '',
  onPress: () => {},
  style: {},
  userTextStyle: {},
  disabled: false,
  type: '',
  colorsCT: [],
  isDanger: false,
  loading: false,
};
ButtonCT.propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func,
  style: PropTypes.shape(),
  userTextStyle: PropTypes.shape(),
  disabled: PropTypes.bool,
  type: PropTypes.string,
  colorsCT: PropTypes.arrayOf(PropTypes.string),
  isDanger: PropTypes.bool,
  loading: PropTypes.bool,
};

export default ButtonCT;
