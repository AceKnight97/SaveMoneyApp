import moment from 'moment';
import PropTypes from 'prop-types';
import React from 'react';
import {Text, View} from 'react-native';
import greenLeftIc from '../../../Images/Basic/greenLeft.svg';
import greenRightIc from '../../../Images/Basic/greenRight.svg';
import leftIc from '../../../Images/Basic/left.svg';
import rightIc from '../../../Images/Basic/right.svg';
import IconButton from '../../Buttons/IconButton';
import MonthSelectorStyle from './_monthSelector';

const {main, title} = MonthSelectorStyle;

const MonthSelector = (props) => {
  const {style, selectedMonth, onChange, disabled} = props;
  const countMonth = moment().diff(selectedMonth, 'months');

  const customTitle = () => {
    if (countMonth > 1) {
      return `${countMonth} months ago: ${moment(selectedMonth).format('MMMM - YYYY')}`;
    }
    return `Last month: ${moment(selectedMonth).format('MMMM - YYYY')}`;
  };

  const onPressLeft = () => {
    onChange('selectedMonth', moment(selectedMonth).subtract(1, 'months'));
  };

  const onPressRight = () => {
    onChange('selectedMonth', moment(selectedMonth).add(1, 'months'));
  };

  return (
    <View style={[main, style]}>
      <IconButton icon={disabled?leftIc : greenLeftIc}
        onPress={onPressLeft}
        disabled={disabled}
      />

      <Text style={title} >{customTitle()}</Text>

      <IconButton icon={countMonth<=1?rightIc : greenRightIc}
        onPress={onPressRight}
        disabled={countMonth<=1}
      />
    </View>
  );
};
MonthSelector.defaultProps = {
  style: {},
  selectedMonth: moment().subtract(1, 'months'),
  onChange: () => { },
  disabled: false,
};
MonthSelector.propTypes = {
  style: PropTypes.shape(),
  selectedMonth: PropTypes.shape(),
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
};

export default MonthSelector;
