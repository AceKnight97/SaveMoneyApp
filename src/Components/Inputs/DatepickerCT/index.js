import {Datepicker} from '@ui-kitten/components';
import PropTypes from 'prop-types';
import React from 'react';
import {View} from 'react-native';
import DatepickerCTStyle from './_datepickerCT';

const {main} = DatepickerCTStyle;

const DatepickerCT = (props) => {
  const { style, value, name, onChange, maxDate
  } = props;
  
  const onSelectDate = (selectedDate) => {
    onChange(name, selectedDate)
  }

  return (
    <View style={[main, style]}>
      <Datepicker
        onSelect={onSelectDate}
        date={value}
        max={maxDate}
      />
    </View>
  );
};
DatepickerCT.defaultProps = {
  style: {},
  name: '',
  onChange: () => { },
  value:undefined,
};
DatepickerCT.propTypes = {
  style: PropTypes.shape(),
  name: PropTypes.string,
  onChange: PropTypes.func,
  value:PropTypes.shape(),
};

export default DatepickerCT;
