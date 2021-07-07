import PropTypes from 'prop-types';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import NewButtonStyle from './_newButton';

const {
  main,
  main_text,
  primary_style,
  text_style,
  danger_style,
  primary_text_style,
  text_text_style,
  danger_text_style,
  disabled_style,
  disabled_text_style,
} = NewButtonStyle;

const BUTTON_TYPES = {
  primary: 'primary',
  text: 'text',
  danger: 'danger',
};

const {primary, text, danger} = BUTTON_TYPES;

const NewButton = (props) => {
  const {style, title, onPress, type, disabled} = props;

  let customStyle;
  let customTextStyle;
  switch (type) {
    case primary:
      customStyle = primary_style;
      customTextStyle = primary_text_style;
      break;
    case text:
      customStyle = text_style;
      customTextStyle = text_text_style;
      break;
    case danger:
      customStyle = danger_style;
      customTextStyle = danger_text_style;
      break;
    default:
      break;
  }

  return (
    <TouchableOpacity
      disabled={disabled}
      style={[main, customStyle, style, disabled ? disabled_style : {}]}
      onPress={onPress}>
      <Text
        style={[
          main_text,
          customTextStyle,
          disabled ? disabled_text_style : {},
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};
NewButton.defaultProps = {
  style: {},
  onPress: () => {},
  type: text,
  disabled: false,
  title: '',
  type: text,
};
NewButton.propTypes = {
  style: PropTypes.shape(),
  onPress: PropTypes.func,
  disabled: PropTypes.bool,
  title: PropTypes.string,
  type: PropTypes.string,
};

export default NewButton;
