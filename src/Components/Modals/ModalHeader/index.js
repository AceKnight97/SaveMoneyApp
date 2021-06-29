import PropTypes from 'prop-types';
import React from 'react';
import { Text, View } from 'react-native';
import ModalHeaderStyle from './_modalsHeader';

const {
  main,
} = ModalHeaderStyle;

const ModalHeader = (props) => {
  const {style, title} = props;
  return (
    <View style={[main,style]}>
      <Text style={{fontWeight:'bold'}}>{title}</Text>
    </View>
  );
};
ModalHeader.defaultProps = {
  style: {},
  title: ''
};
ModalHeader.propTypes = {
  style: PropTypes.shape(),
  title:PropTypes.string,
};

export default ModalHeader;
