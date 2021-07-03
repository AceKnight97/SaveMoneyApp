import React from 'react';
import PropTypes from 'prop-types';
import {Text, View, TouchableOpacity} from 'react-native';
import _ from 'lodash';
import LinearGradient from 'react-native-linear-gradient';
import {useMergeState} from '../../../Helper/customHooks';
import CardItemStyle from './_cardItem';

const {main, title_style, money_style} = CardItemStyle;

const CardItem = (props) => {
  const [state, setState] = useMergeState({
    data: [],
  });

  const {style, data} = props;

  const {title, money, details, sessions} = data;

  const onClick = () => {
    props.onClick(data);
  };

  return (
    <TouchableOpacity style={[main, style]} onClick={onClick}>
      <LinearGradient
        // style={touchSty}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        colors={props.colors}>
        <View>
          <Text style={title_style}>{title}</Text>

          {money !== 0 && <Text style={money_style}>{`$${money}`}</Text>}
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};
CardItem.defaultProps = {
  style: {},
  data: {},
  onClick: () => {},
  colors: ['white', 'white'],
};
CardItem.propTypes = {
  style: PropTypes.shape(),
  data: PropTypes.shape(),
  onClick: PropTypes.func,
  colors: PropTypes.arrayOf(PropTypes.string),
};

export default CardItem;
