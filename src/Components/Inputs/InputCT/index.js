import PropTypes from 'prop-types';
import React from 'react';
import {TextInput, View} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {colors} from '../../../Constant/color';
import {useMergeState} from '../../../Helper/customHooks';
import GlobalStyles from '../../../Styles';
import InputTitle from '../InputTitle';
import InputCTStyle from './_inputCT';

const {centerC, mr8} = GlobalStyles;
const {
  inputWrapper,
  inputCTMain,
  textAreaStyle,
  inputBasic,
  activeBorder,
} = InputCTStyle;
const INPUT_CT_TYPES = {
  TEXT: 'TEXT',
  TEXT_AREA: 'TEXT_AREA',
  NUMBER: 'NUMBER',
};
const {TEXT, TEXT_AREA, NUMBER} = INPUT_CT_TYPES;

const InputCT = (props) => {
  const [state, setState] = useMergeState({
    isFocus: false,
  });
  const {
    title,
    disabled,
    autoFocus,
    returnKeyType,
    // keyboardType,
    style,
    value,
    isSecured,
    // multiline,
    // onChange,
    maxLength,
    placeholder,
    inputStyle,
    icon,
    onSubmitEditing,
    type,
    name,
  } = props;

  const onChange = (text) => {
    props.onChange(name, text);
  };

  const onFocus = () => {
    setState({isFocus: true});
  };

  const onBlur = () => {
    setState({isFocus: false});
  };

  const {isFocus} = state;

  let typeStyle;
  let keyboardType = props.keyboardType;
  let multiline = props.multiline;
  let numberOfLines = props.numberOfLines;
  switch (type) {
    case TEXT_AREA:
      typeStyle = textAreaStyle;
      multiline = true;
      numberOfLines = props.numberOfLines || 6;
      break;
    case NUMBER:
      keyboardType = 'numeric';
      break;
    default:
      break;
  }

  return (
    <View style={[inputCTMain, style]}>
      <InputTitle title={title} />

      <View style={[inputWrapper, typeStyle, isFocus ? activeBorder : {}]}>
        {icon ? <SvgXml xml={icon} style={mr8} /> : null}

        <TextInput
          editable={!disabled}
          autoFocus={autoFocus}
          returnKeyType={returnKeyType} // done or next
          secureTextEntry={isSecured}
          onChangeText={onChange}
          maxLength={maxLength}
          value={`${value}`}
          style={[inputBasic, inputStyle]}
          placeholder={placeholder}
          onSubmitEditing={onSubmitEditing}
          numberOfLines={numberOfLines}
          onBlur={onBlur}
          onFocus={onFocus}
          multiline={multiline}
          keyboardType={keyboardType}
          // fontStyle={fontStyle}
          // placeholderStyle={[{}, placeholderStyle]}
          // placeholderTextColor={defaultcolor || colors.gray1}
        />
      </View>
    </View>
  );
};

InputCT.defaultProps = {
  title: '',
  disabled: false,
  autoFocus: false,
  returnKeyType: 'done',
  keyboardType: 'default',
  style: {},
  value: '',
  isSecured: false,
  multiline: false,
  onChange: () => {},
  maxLength: 100,
  placeholder: '',
  icon: '',
  onSubmitEditing: () => {},
  numberOfLines: undefined,
  type: TEXT,
};
InputCT.propTypes = {
  title: PropTypes.string,
  disabled: PropTypes.bool,
  autoFocus: PropTypes.bool,
  returnKeyType: PropTypes.string,
  keyboardType: PropTypes.string,
  style: PropTypes.shape(),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  isSecured: PropTypes.bool,
  multiline: PropTypes.bool,
  onChange: PropTypes.func,
  maxLength: PropTypes.number,
  placeholder: PropTypes.string,
  icon: PropTypes.string,
  onSubmitEditing: PropTypes.func,
  numberOfLines: PropTypes.number,
  type: PropTypes.string,
};

export default InputCT;
