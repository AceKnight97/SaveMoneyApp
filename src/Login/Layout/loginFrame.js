import PropTypes from 'prop-types';
import React from 'react';
import {KeyboardAvoidingView, ScrollView, Text, View} from 'react-native';
import GlobalStyles from '../../Styles';
import Style from '../Style';

const {
  frameWarpper, headerText, body, footer,
} = Style.LoginFrameStyle;

const {centerC1} = GlobalStyles;

const LoginFrame = (props) => {
  const {style, children, showFooter} = props;
  return (
    <KeyboardAvoidingView enabled>
      <ScrollView>
        <View style={[frameWarpper, centerC1, style]}>

          <Text style={headerText}>Save Money App</Text>

          <View style={body}>{children}</View>

          <View style={footer}>{showFooter ? showFooter() : null}</View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

LoginFrame.defaultProps = {
  title: '',
  showFooter: () => {},
  style: {},
};
LoginFrame.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  showFooter: PropTypes.func,
  style: PropTypes.shape(),
};

export default LoginFrame;
