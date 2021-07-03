import PropTypes from 'prop-types';
import React from 'react';
import {View} from 'react-native';
import BottomAppHeader from '../../Components/Header/bottomAppHeader';
import DatepickerCT from '../../Components/Inputs/DatepickerCT';
import InputCT from '../../Components/Inputs/InputCT';
import FooterButtons70 from '../../Components/UI/FooterButtons70';
import {TODAY} from '../../Constant';
import {useMergeState} from '../../Helper/customHooks';
import GlobalStyles from '../../Styles';
import ViewsStyle from '../Style';
import JournalAddIncomeStyle from './_journalAddIncome';

const {f1_wh_100, mt16, mt36} = GlobalStyles;
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
    notes: '',
  });
  const {style} = props;

  const {date, income, notes} = state;

  const onSelectDate = (date) => {
    setState({date});
  };

  const onChange = (key, value) => {
    setState({[key]: value});
  };

  const renderBody = () => (
    <View style={main}>
      <DatepickerCT
        style={mt16}
        name="date"
        onChange={onChange}
        value={date}
        maxDate={TODAY}
      />
      <InputCT
        style={mt36}
        name="income"
        value={income}
        title="Income"
        onChange={onChange}
        placeholder="Input income"
        type="NUMBER"
      />
      <InputCT
        style={mt36}
        name="notes"
        value={notes}
        title="Notes"
        onChange={onChange}
        placeholder="Input notes..."
        type="TEXT_AREA"
      />
    </View>
  );

  return (
    <View style={f1_wh_100}>
      <BottomAppHeader title="Add your income" />

      <View
        style={[
          bottom_App_Body,
          {
            justifyContent: 'space-between',
          },
        ]}>
        {renderBody()}

        <FooterButtons70 leftTitle="Cancel" rightTitle="Add" />
      </View>
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
