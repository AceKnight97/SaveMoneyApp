import {Datepicker} from '@ui-kitten/components';
import PropTypes from 'prop-types';
import React from 'react';
import {View} from 'react-native';
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
  const {style, value, name, onChange, maxDate, title} = props;

  const {isFocus} = state;

  return (
    <View style={[main, style]}>
      <InputTitle title={title} />

      <Datepicker
        onFocus={onFocus}
        onBlur={onBlur}
        onSelect={onSelectDate}
        date={value}
        max={maxDate}
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
};
DatepickerCT.propTypes = {
  style: PropTypes.shape(),
  name: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.shape(),
};

export default DatepickerCT;
