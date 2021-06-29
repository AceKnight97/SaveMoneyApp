import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  TextInput,
} from 'react-native';
import {SvgXml} from 'react-native-svg';

import GlobalStyles from '../../Styles';
import {colorsLinear, colors} from '../../Constant/color';

const styles = StyleSheet.create({
  InputButMain: {
    width: '100%',
    backgroundColor: 'transparent',
  },
  titleView: {
    marginBottom: 4,
  },
  inputWrapper: {
    height: 40,
    width: '100%',

    borderBottomColor: colors.gray1,
    borderBottomWidth: 1,

    paddingHorizontal: 4,
    paddingVertical: 0,

    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputBasic: {
    fontSize: 14,
    color: 'black',
    flex: 1,
  },
  titleText: {
    color: 'black',
  },
});
const {centerC} = GlobalStyles;
const {inputWrapper, InputButMain, titleText, titleView, inputBasic} = styles;

class InputButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onFocus: false,
    };
  }
  render() {
    const {
      title,
      disabled,
      autoFocus,
      returnKeyType,
      keyboardType,
      style,
      value,
      isSecured,
      multiline,
      onChangeText,
      maxLength,
      placeholder,
      inputStyle,
      icon,
      onSubmitEditing,
      onPress,
      titleSty
    } = this.props;

    // const { onFocus } = this.state;

    return (
      <TouchableOpacity style={[InputButMain, style]} onPress={onPress}>
        {title ? (
          <View style={[titleView,titleSty]}>
            <Text style={titleText}>{title}</Text>
          </View>
        ) : (
          <View />
        )}

        <View
          style={[
            inputWrapper,
            value ? {borderBottomColor: colors.green1} : {},
          ]}>
          {icon ? <SvgXml xml={icon} style={{marginRight: 8}} /> : null}

          <TextInput
            editable={false}
            autoFocus={autoFocus}
            returnKeyType={returnKeyType} // done or next
            keyboardType={keyboardType}
            secureTextEntry={isSecured}
            multiline={multiline}
            onChangeText={onChangeText}
            maxLength={maxLength}
            value={value}
            style={[inputBasic, inputStyle]}
            placeholder={placeholder}
            onSubmitEditing={onSubmitEditing}
          />
        </View>
      </TouchableOpacity>
    );
  }
}

InputButton.defaultProps = {
  title: '',
  disabled: false,
  autoFocus: false,
  returnKeyType: 'done',
  keyboardType: 'default',
  style: {},
  titleSty: {},
  value: '',
  isSecured: false,
  multiline: false,
  onChangeText: () => {},
  maxLength: 100,
  placeholder: '',
  icon: '',
  onSubmitEditing: () => {},
};
InputButton.propTypes = {
  title: PropTypes.string,
  disabled: PropTypes.bool,
  autoFocus: PropTypes.bool,
  returnKeyType: PropTypes.string,
  keyboardType: PropTypes.string,
  style: PropTypes.shape(),
  titleSty: PropTypes.shape(),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  isSecured: PropTypes.bool,
  multiline: PropTypes.bool,
  onChangeText: PropTypes.func,
  maxLength: PropTypes.number,
  placeholder: PropTypes.string,
  icon: PropTypes.string,
  onSubmitEditing: PropTypes.func,
};

export default InputButton;
