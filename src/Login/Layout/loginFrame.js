import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import GlobalStyles from '../../Styles';
import {colorsLinear, colors} from '../../Constant/color';
import Style from '../Style';

const {
  frameWarpper, header, headerText, body, footer
} = Style.LoginFrameStyle;

const {lush} = colorsLinear;
const { centerC1, cent } = GlobalStyles;

const LoginFrame = (props) => {
  const {style, children, showFooter} = props;
  return (
    <View style={[frameWarpper, centerC1, style]}>
      {/* <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        colors={lush}
        style={[header, cent]}>
        <View>
          <Text style={headerText}>Save Money Note</Text>
        </View>
      </LinearGradient> */}

      <View style={{paddingTop: 48}}>
          <Text style={headerText}>Save Money Note</Text>
        </View>

      <View style={body}>{children}</View>

      <View style={[footer]}>{showFooter ? showFooter() : null}</View>
    </View>
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
