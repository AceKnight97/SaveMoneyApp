import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import InputTitleStyle from './_inputTitle';

const {
main, titleStyle
} = InputTitleStyle;


const InputTitle = (props) => {
  
  const {    title, style } = props;
  if (!title) {
    return null;
}
  return (
    <View style={[main, style]}>
      <Text style={titleStyle}>{title}</Text>
    </View>
  );
}

InputTitle.defaultProps = {
  title: '',
};
InputTitle.propTypes = {
  title: PropTypes.string,
};

export default InputTitle;
