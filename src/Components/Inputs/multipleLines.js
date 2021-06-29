import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, View, TextInput} from 'react-native';

import GlobalStyles from '../../Styles';
import {colors} from '../../Constant/color';
import {screenW} from '../../Constant';

const {gray1} = colors;
const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputCTMain: {
    width: '100%',
    display: 'flex',
    backgroundColor: 'transparent',
    height: 80,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: gray1,
    padding: 16,
  },
  titleView: {
    marginBottom: 4,
  },
  inputBasic: {
    fontSize: 14,
    color: 'black',
    textAlignVertical: 'top',
    // borderWidth: 1,
    padding: 0,
    margin: 0,
  },
  titleText: {
    color: 'black',
  },
});
const {centerC} = GlobalStyles;
const {inputCTMain, titleText, titleView, inputBasic} = styles;

class MultipleLines extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
      onRef,
    } = this.props;
    return (
      <View style={[{display:'flex', flexDirection:'column', width:'100%'}, style]}>
        {title ? (
          <View style={titleView}>
            <Text style={titleText}>{title}</Text>
          </View>
        ) : null}
        <View style={[inputCTMain]}>
          <TextInput
            ref={onRef}
            editable={!disabled}
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
      </View>
    );
  }
}

MultipleLines.defaultProps = {
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
};
MultipleLines.propTypes = {
  title: PropTypes.string,
  disabled: PropTypes.bool,
  autoFocus: PropTypes.bool,
  returnKeyType: PropTypes.string,
  keyboardType: PropTypes.string,
  style: PropTypes.shape(),
  value: PropTypes.any,
  isSecured: PropTypes.bool,
  multiline: PropTypes.bool,
  onChangeText: PropTypes.func,
  maxLength: PropTypes.number,
  placeholder: PropTypes.string,
  icon: PropTypes.string,
  onSubmitEditing: PropTypes.func,
};

export default MultipleLines;
