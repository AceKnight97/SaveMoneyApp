import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, View} from 'react-native';
import GlobalStyles from '../../Styles';
import { colors } from '../../Constant/color';

const { field } = colors;

const styles = StyleSheet.create({
  mainView: {
    height: 56,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    borderBottomColor: field,
    borderBottomWidth: 1,
  },
  titleSty: {},
});
const {} = GlobalStyles;
const {mainView, titleSty} = styles;

class HeaderTitle extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {style, title} = this.props;
    return (
      <View style={[mainView, style]}>
        <View style={titleSty}>
          <Text>{title}</Text>
        </View>
      </View>
    );
  }
}

HeaderTitle.defaultProps = {
  style: {},
  title: '',
};
HeaderTitle.propTypes = {
  style: PropTypes.shape(),
  title: PropTypes.string,
};

export default HeaderTitle;
