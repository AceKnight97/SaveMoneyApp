import PropTypes from 'prop-types';
import React from 'react';
import {View} from 'react-native';
import GlobalStyles from '../../../Styles';
import ButtonCT from '../../Buttons/ButtonCT';
import FooterButtons70Style from './_footerButtons70';

const {f1_wh_100, w_100} = GlobalStyles;
const {main, rightBtn} = FooterButtons70Style;

const FooterButtons70 = (props) => {
  const {
    style,
    leftTitle,
    rightTitle,
    leftStyle,
    rightStyle,
    leftOnPress,
    rightOnPress,
    loading,
    disabled,
  } = props;

  return (
    <View style={[main, style]}>
      <ButtonCT
        type="NONE"
        title={leftTitle}
        style={leftStyle}
        onPress={leftOnPress}
        disabled={loading}
      />
      <View style={rightBtn}>
        <ButtonCT
          loading={loading}
          type="LINEAR"
          style={[w_100, rightStyle]}
          userTextStyle={{
            width: '100%',
            textAlign: 'center',
          }}
          title={rightTitle}
          onPress={rightOnPress}
          disabled={disabled}
        />
      </View>
    </View>
  );
};
FooterButtons70.defaultProps = {
  style: {},
  leftTitle: '',
  rightTitle: '',
  leftStyle: {},
  rightStyle: {},
  leftOnPress: () => {},
  rightOnPress: () => {},
  loading: false,
  disabled: false,
};
FooterButtons70.propTypes = {
  style: PropTypes.shape(),
  leftTitle: PropTypes.string,
  rightTitle: PropTypes.string,
  leftStyle: PropTypes.shape(),
  rightStyle: PropTypes.shape(),
  leftOnPress: PropTypes.func,
  rightOnPress: PropTypes.func,
  loading: PropTypes.bool,
  diasbled: PropTypes.bool,
};

export default FooterButtons70;
