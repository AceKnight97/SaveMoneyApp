import {Datepicker} from '@ui-kitten/components';
import moment from 'moment';
import PropTypes from 'prop-types';
import React from 'react';
import {View} from 'react-native';
import {TODAY} from '../../../Constant';
import {useMergeState} from '../../../Helper/customHooks';
import InputTitle from '../InputTitle';
import DatepickerCTStyle from './_datepickerCT';

const {main, controlStyle, activeBorder} = DatepickerCTStyle;

const DatepickerCT = (props) => {
  const [state, setState] = useMergeState({
    isFocus: false,
  });

  const onFocus = () => {
    setState({isFocus: true});
  };

  const onBlur = () => {
    setState({isFocus: false});
  };

  const onSelectDate = (selectedDate) => {
    onChange(name, selectedDate);
  };
  const {style, value, name, onChange, maxDate, title, minDate} = props;

  const {isFocus} = state;

  return (
    <View style={[main, style]}>
      <InputTitle title={title} />

      <Datepicker
        onFocus={onFocus}
        onBlur={onBlur}
        onSelect={onSelectDate}
        date={moment(value).isValid()?value: undefined}
        max={maxDate}
        min={minDate}
        controlStyle={[controlStyle, isFocus ? activeBorder : {}]}
      />
    </View>
  );
};
DatepickerCT.defaultProps = {
  style: {},
  name: '',
  onChange: () => {},
  value: undefined,
  maxDate: TODAY,
  minDate: new Date(1900, 1, 1),
  title: '',
};
DatepickerCT.propTypes = {
  style: PropTypes.shape(),
  name: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.shape(),
  maxDate: PropTypes.shape(),
  title: PropTypes.string,
  minDate: PropTypes.shape(),
};

export default DatepickerCT;
