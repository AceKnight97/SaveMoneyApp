import PropTypes from 'prop-types';
import _ from 'lodash';
import React, {useEffect} from 'react';
import {Image, KeyboardAvoidingView, ScrollView, View} from 'react-native';
import BottomAppHeader from '../../Components/Header/bottomAppHeader';
import DatepickerCT from '../../Components/Inputs/DatepickerCT';
import InputCT from '../../Components/Inputs/InputCT';
import FooterButtons70 from '../../Components/UI/FooterButtons70';
import SuccessModal from '../../Components/UI/SuccessPage';
import {TODAY} from '../../Constant';
import {useMergeState} from '../../Helper/customHooks';
import incomeIc from '../../Images/Pages/Journal/income.jpg';
import GlobalStyles from '../../Styles';
import {mutationIncome, queryDailtyInfo} from '../Journal/helper';
import JournalAddIncomeStyle from './_journalAddIncome';
import moment from 'moment';

const {f1_wh_100, mt16, mt24, mt36} = GlobalStyles;
const {main, income_icon, wrapper} = JournalAddIncomeStyle;

const JournalAddIncome = (props) => {
  const [state, setState] = useMergeState({
    date: new Date(),
    income: 0,
    id: undefined,
    notes: '',
    loading: false,
    isSuccess: false,
  });

  const fetchSelectedDateInfo = async () => {
    const dailyInfo = await queryDailtyInfo(state.date);
    console.log({dailyInfo});
    const obj = {};
    if (_.isEmpty(dailyInfo)) {
      _.assign(obj, {
        id: undefined,
        income: 0,
        notes: '',
      });
    } else {
      _.assign(obj, {
        id: dailyInfo.id,
        income: dailyInfo.income,
        notes: dailyInfo.notes,
      });
    }
    setState(obj);
  };

  useEffect(() => {
    const dailyInfo = props.navigation.getParam('dailyInfo');
    if (moment(state.date).format('DD/MM/YYYY') === dailyInfo.date) {
      setState({
        ...dailyInfo,
        date: state.date,
      });
    } else {
      fetchSelectedDateInfo();
    }
  }, [state.date]);

  const onPressGoBack = () => {
    props.navigation.navigate('Journal', state.isSuccess? {back: _.random(9999)}:{});
  };

  const onPressAdd = async () => {
    const res = await mutationIncome({
      id: state.id,
      date,
      income,
      notes,
    });
    if (res) {
      setState({isSuccess: true});
    }
  };

  const {date, income, notes, loading, isSuccess} = state;

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
      isSuccess ? (
        <SuccessModal onClickBack={onPressGoBack} />):
   ( <View style={f1_wh_100}>
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
   </View>)
  );
};
JournalAddIncome.defaultProps = {
  logs: [],
};
JournalAddIncome.propTypes = {
  logs: PropTypes.arrayOf(PropTypes.shape()),
  navigation: PropTypes.shape().isRequired,
};

export default JournalAddIncome;
