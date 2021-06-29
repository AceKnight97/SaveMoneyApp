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
  inputCTMain: {
    width: '100%',
    backgroundColor: 'transparent',
    display: 'flex',
    flexDirection: 'row',
    alignItems:'center',
  },
  titleView: {
    // marginBottom: 4,
    marginRight: 4,
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
const {inputWrapper, inputCTMain, titleText, titleView, inputBasic} = styles;

class InputRowCT extends Component {
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
    } = this.props;

    // const { onFocus } = this.state;

    return (
      <TouchableOpacity style={[inputCTMain, style]} onPress={onPress}>
        {title ? (
          <View style={titleView}>
            <Text style={titleText}>{`${title}:`}</Text>
          </View>
        ) : null}

        <View
          style={[
            inputWrapper,
            value ? {borderBottomColor: colors.green1} : {},
          ]}>
          {icon ? <SvgXml xml={icon} style={{marginRight: 8}} /> : null}

          <TextInput
            // editable={!disabled}
            editable={false}
            autoFocus={autoFocus}
            // onBlur={() => this.setState({ onFocus: false })}
            // onFocus={() => this.setState({ onFocus: true })}
            returnKeyType={returnKeyType} // done or next
            keyboardType={keyboardType}
            secureTextEntry={isSecured}
            multiline={multiline}
            onChangeText={onChangeText}
            maxLength={maxLength}
            value={value}
            style={[inputBasic, inputStyle]}
            // fontStyle={fontStyle}
            // placeholderStyle={[{}, placeholderStyle]}
            // placeholderTextColor={defaultcolor || colors.gray1}
            placeholder={placeholder}
            onSubmitEditing={onSubmitEditing}
          />
        </View>
      </TouchableOpacity>
    );
  }
}

InputRowCT.defaultProps = {
  title: '',
  disabled: false,
  autoFocus: false,
  returnKeyType: 'done',
  keyboardType: 'default',
  style: {},
  value: '',
  isSecured: false,
  multiline: false,
  onChangeText: () => {},
  maxLength: 100,
  placeholder: '',
  icon: '',
  onSubmitEditing: () => {},
  onPress: () => {},
};
InputRowCT.propTypes = {
  title: PropTypes.string,
  disabled: PropTypes.bool,
  autoFocus: PropTypes.bool,
  returnKeyType: PropTypes.string,
  keyboardType: PropTypes.string,
  style: PropTypes.shape(),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  isSecured: PropTypes.bool,
  multiline: PropTypes.bool,
  onChangeText: PropTypes.func,
  maxLength: PropTypes.number,
  placeholder: PropTypes.string,
  icon: PropTypes.string,
  onSubmitEditing: PropTypes.func,
  onPress: PropTypes.func,
};

export default InputRowCT;
