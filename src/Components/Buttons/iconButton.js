import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {SvgXml} from 'react-native-svg';

import GlobalStyles from '../../Styles';
import {colors} from '../../Constant/color';
import {screenW} from '../../Constant';

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
const {flexRowAligCent} = GlobalStyles;
const {mainView} = styles;
class IconButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {icon, onPress, style, iconSty} = this.props;
    return (
      <TouchableOpacity
        hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
        style={mainView}
        onPress={onPress}
        style={style}>
        <SvgXml xml={icon} style={iconSty} />
      </TouchableOpacity>
    );
  }
}

IconButton.defaultProps = {
  onPress: () => {},
  style: {},
  iconSty: {},
};
IconButton.propTypes = {
  onPress: PropTypes.func,
  style: PropTypes.shape(),
  iconSty: PropTypes.shape(),
  icon: PropTypes.string.isRequired,
};

export default IconButton;
