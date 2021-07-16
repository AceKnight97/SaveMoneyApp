import PropTypes from 'prop-types';
import React from 'react';
import {KeyboardAvoidingView, ScrollView, Text, View, Image, ImageBackground} from 'react-native';
import {SvgXml} from 'react-native-svg';
import GlobalStyles from '../../Styles';
import Style from '../Style';
import coinsIc from '../../Images/Pages/coins.svg';
import {screenH, screenW} from '../../Constant';
import topleft from '../../Images/Pages/topleft.svg';
import topright from '../../Images/Pages/topright.svg';
import botleft from '../../Images/Pages/botleft.svg';
import botright from '../../Images/Pages/botright.svg';


const {
  frameWarpper, headerText, body, footer,
} = Style.LoginFrameStyle;

const {centerC1} = GlobalStyles;

const LoginFrame = (props) => {
  const {style, children, showFooter} = props;
  return (
    <KeyboardAvoidingView enabled>
      <ScrollView >

        <View style={[frameWarpper, centerC1, style,
        ]}>
          <SvgXml xml={topleft} style={{
            position: 'absolute',
            top: 0,
            left: 0,
          }}/>
          <SvgXml xml={topright} style={{
            position: 'absolute',
            top: 0,
            right: 0,
          }}/>
          <SvgXml xml={botleft} style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
          }}/>
          <SvgXml xml={botright} style={{
            position: 'absolute',
            bottom: 0,
            right: 0,
          }}
          />
          <Text style={headerText}>Save Money App</Text>
          <SvgXml
            xml={coinsIc}
            style={{
              marginTop: 12,
            }}
            height='48'
            width='100%' />

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
