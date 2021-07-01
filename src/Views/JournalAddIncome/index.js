import PropTypes from 'prop-types';
import React from 'react';
import { View } from 'react-native';
import BottomAppHeader from '../../Components/Header/bottomAppHeader';
import InputCT from '../../Components/Inputs/inputCT';
import { TODAY } from '../../Constant';
import { useMergeState } from '../../Helper/customHooks';
import GlobalStyles from '../../Styles';
import ViewsStyle from '../Style';
import JournalAddIncomeStyle from './_journalAddIncome';
import DatepickerCT from '../../Components/Inputs/DatepickerCT'

const {f1_wh_100, mt16} = GlobalStyles;
const {bottom_App_Body} = ViewsStyle;
const {main} = JournalAddIncomeStyle;

const STATUS = {
  ADD: 'ADD',
  EDIT: 'EDIT',
  DISPLAY: 'DISPLAY',
};

const {ADD, EDIT, DISPLAY} = STATUS;

const JournalAddIncome = (props) => {
  const [state, setState] = useMergeState({
    date: new Date(),
    income: 0,
  });
  const {style} = props;

  const {date, income} = state;

  const onSelectDate = (date) => {
    setState({date});
  };

  const onChange = (key, value) => {
    setState({ [key]: value });
  }

  const renderBody = () => (
    <View style={main}>
      
      <DatepickerCT
        style={mt16}
        name='date'
        onChange={onChange}
        value={date}
        maxDate={TODAY}
      />

      <InputCT
        style={mt16}
        name='income'
        value={income}
        title='Income'
        onChangeText={onChange}
        placeholder="Input income"
        onSubmitEditing={() => {
          nextInput1.focus();
        }}
        returnKeyType="next"
        keyboardType='numeric'
      />
    </View>
  );

  return (
    <View style={f1_wh_100}>
      <BottomAppHeader title="Add your income" />

      <View style={bottom_App_Body}>{renderBody()}</View>
    </View>
  );
};
JournalAddIncome.defaultProps = {
  style: {},
  logs: [],
};
JournalAddIncome.propTypes = {
  style: PropTypes.shape(),
  logs: PropTypes.arrayOf(PropTypes.shape()),
};

export default JournalAddIncome;
