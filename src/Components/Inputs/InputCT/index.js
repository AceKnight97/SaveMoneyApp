import PropTypes from 'prop-types';
import React, {useEffect} from 'react';
import {Text, TextInput, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SvgXml} from 'react-native-svg';
import {useMergeState} from '../../../Helper/customHooks';
import grayEye from '../../../Images/Basic/grayEye.svg';
import grayEyeCross from '../../../Images/Basic/grayEyeCross.svg';
import GlobalStyles from '../../../Styles';
import InputTitle from '../InputTitle';
import InputCTStyle from './_inputCT';


const {centerC, mr8, ml8} = GlobalStyles;
const {
  inputWrapper,
  inputCTMain,
  textAreaStyle,
  inputBasic,
  activeBorder,
  errorStyle,
  errorBorder,
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
    isSecured: props.isSecured,
  });

  useEffect(() => {
    setState({isSecured: props.isSecured});
  }, [props.isSecured]);

  const {
    title,
    disabled,
    autoFocus,
    returnKeyType,
    // keyboardType,
    style,
    value,
    // multiline,
    // onChange,
    maxLength,
    placeholder,
    icon,
    onSubmitEditing,
    type,
    inputStyle,
    name,
    errMes,
  } = props;
  const {isFocus, isSecured} = state;

  const onChange = (text) => {
    props.onChange(name, text);
  };

  const onChangeSecure = () => {
    setState({isSecured: !isSecured});
  };

  const onFocus = () => {
    setState({isFocus: true});
  };

  const onBlur = () => {
    setState({isFocus: false});
  };


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

      <View style={[inputWrapper, typeStyle, isFocus ? activeBorder : {},
      errMes?errorBorder:{}]}>
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
        {props.isSecured ? (
          <TouchableOpacity
            style={ml8}
            onPress={onChangeSecure}
          >
            <SvgXml xml={ isSecured?grayEyeCross:grayEye } />
          </TouchableOpacity>
        ): null}

      </View>

      {
        errMes ? (<Text style={errorStyle}>
          {errMes}
        </Text>):null
      }

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
  inputStyle: {},
  name: '',
  errMes: '',
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
  inputStyle: PropTypes.shape(),
  name: PropTypes.string,
  errMes: PropTypes.string,
};

export default InputCT;
