import PropTypes from 'prop-types';
import React from 'react';
import {Image, KeyboardAvoidingView, ScrollView, View} from 'react-native';
import BottomAppHeader from '../../Components/Header/bottomAppHeader';
import DatepickerCT from '../../Components/Inputs/DatepickerCT';
import InputCT from '../../Components/Inputs/InputCT';
import FooterButtons70 from '../../Components/UI/FooterButtons70';
import {TODAY} from '../../Constant';
import {useMergeState} from '../../Helper/customHooks';
import incomeIc from '../../Images/Pages/Journal/income.jpg';
import GlobalStyles from '../../Styles';
import JournalAddIncomeStyle from './_journalAddIncome';

const {f1_wh_100, mt16, mt24, mt36} = GlobalStyles;
const {main, income_icon, wrapper} = JournalAddIncomeStyle;

const JournalAddIncome = (props) => {
  const [state, setState] = useMergeState({
    date: new Date(),
    income: 0,
    notes: '',
    loading: false,
  });

  const onPressGoBack = () => {
    props.navigation.goBack();
  };

  const onPressAdd = async () => {};

  const {date, income, notes, loading} = state;

  const onChange = (key, value) => {
    setState({[key]: value});
  };

  const renderBody = () => (
    <View style={main}>
      <Image source={incomeIc} style={income_icon} />

      <DatepickerCT
        title="Date"
        name="date"
        onChange={onChange}
        value={date}
        maxDate={TODAY}
      />
      <InputCT
        style={mt24}
        name="income"
        value={income}
        title="Income"
        onChange={onChange}
        placeholder="Input income"
        type="NUMBER"
      />
      <InputCT
        style={mt24}
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

      <KeyboardAvoidingView enabled>
        <ScrollView>
          <View style={wrapper}>
            {renderBody()}

            <FooterButtons70
              leftTitle="Cancel"
              rightTitle="Add"
              leftOnPress={onPressGoBack}
              rightOnPress={onPressAdd}
              loading={loading}
              disabled={!date || !income}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};
JournalAddIncome.defaultProps = {
  logs: [],
};
JournalAddIncome.propTypes = {
  logs: PropTypes.arrayOf(PropTypes.shape()),
};

export default JournalAddIncome;
