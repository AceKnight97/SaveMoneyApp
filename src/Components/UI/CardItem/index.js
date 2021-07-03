import PropTypes from 'prop-types';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import GlobalStyles from '../../../Styles';
import CardItemStyle from './_cardItem';

const {
  main,
  title_style,
  money_style,
  mainView,
  touchSty,
  colorWhite,
} = CardItemStyle;

const {hitSlop10} = GlobalStyles;

const CardItem = (props) => {
  const {style, data, wrapperSty, colors} = props;

  const {title, money} = data;

  const onPress = () => {
    props.onClick(data);
  };

  return (
    <TouchableOpacity
      hitSlop={hitSlop10}
      onPress={onPress}
      style={[touchSty, wrapperSty]}>
      <LinearGradient
        style={touchSty}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        colors={colors}>
        <View style={[mainView, style]}>
          <Text style={title_style}>{title}</Text>
          {money ? <Text style={money_style}>{`$${money}`}</Text> : null}
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};
CardItem.defaultProps = {
  style: {},
  wrapperSty: {},
  data: {},
  onClick: () => {},
  colors: ['white', 'white'],
};
CardItem.propTypes = {
  style: PropTypes.shape(),
  wrapperSty: PropTypes.shape(),
  data: PropTypes.shape(),
  onClick: PropTypes.func,
  colors: PropTypes.arrayOf(PropTypes.string),
};

export default CardItem;
