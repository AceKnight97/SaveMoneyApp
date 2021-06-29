import React, {Component} from 'react';
import PropTypes from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import GlobalStyles from '../../Styles';
import {screenW, LinearLib, getLinearColors} from '../../Constant';

const itemSize = screenW / 3 - 20;

const styles = StyleSheet.create({
  mainView: {
    height: itemSize,
    width: itemSize,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  touchSty: {
    borderRadius: 8,
    width: itemSize,
    height: itemSize,
  },
  colorWhite: {
    color: 'white',
  },
});
const {} = GlobalStyles;
const {mainView, touchSty, colorWhite} = styles;
class DetailCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {onPress, wrapperSty, style, data, colors} = this.props;
    const {title, money} = data;
    // console.log('getLinearColors(): ', getLinearColors());
    return (
      <TouchableOpacity
        hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
        onPress={() => onPress(data)}
        style={[touchSty, wrapperSty]}>
        <LinearGradient
          style={touchSty}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          colors={colors}>
          <View style={[mainView, style]}>
            {money ? (
              <View style={{marginBottom: 8}}>
                <Text style={colorWhite}>{`$${money}`}</Text>
              </View>
            ) : null}
            <Text style={colorWhite}>{title}</Text>
          </View>
        </LinearGradient>
      </TouchableOpacity>
    );
  }
}

DetailCard.defaultProps = {
  onPress: () => {},
  data: {},
  colors: ['red', 'blue'],
};
DetailCard.propTypes = {
  onPress: PropTypes.func,
  data: PropTypes.shape(),
  colors: PropTypes.arrayOf(PropTypes.string),
};

export default DetailCard;
