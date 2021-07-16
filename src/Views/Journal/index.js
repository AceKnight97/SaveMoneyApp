import _ from 'lodash';
import moment from 'moment';
import PropTypes from 'prop-types';
import React, {useEffect, useRef} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {SvgXml} from 'react-native-svg';
import ButtonCT from '../../Components/Buttons/ButtonCT';
import BottomAppHeader from '../../Components/Header/bottomAppHeader';
import DatepickerCT from '../../Components/Inputs/DatepickerCT';
import DisplayMoney from '../../Components/UI/DisplayMoney';
import {TODAY} from '../../Constant';
import {useMergeState} from '../../Helper/customHooks';
import moneyIc from '../../Images/Components/MoneyBox/money.svg';
import GlobalStyles from '../../Styles';
import ViewsStyle from '../Style';
import {queryDailtyInfo} from './helper';
import JournalStyle from './_journal';

const {f1_wh_100, mt16, w_100} = GlobalStyles;
const {bottom_App_Body} = ViewsStyle;
const {
  journal_selected_day,
  journal_achievement,
  journal_money_box,
  journal_income,
  journal_income_title,
} = JournalStyle;

const Journal = (props) => {
  const isFirst = useRef(true);
  const [state, setState] = useMergeState({
    selectedDate: new Date(),
    dailyInfo: {
      id: '',
      date: new Date(),
      logs: [],
      income: 0,
      notes: '',
    },
  });

  const {
    selectedDate,
    dailyInfo,
  } = state;

  const onChange = (key, value) => {
    setState({[key]: value});
  };

  const fetchSelectedDateInfo = async () => {
    // setState({loading: true});
    const dailyInfo = await queryDailtyInfo(state.selectedDate);
    console.log({dailyInfo});
    const obj = {};
    if (_.isEmpty(dailyInfo)) {
      _.assign(obj, {
        dailyInfo: {
          id: '',
          date: state.selectedDate,
          logs: [],
          income: 0,
          notes: '',
        },
      });
    } else {
      _.assign(obj, {dailyInfo});
    }
    setState(obj);
  };

  useEffect(() => {
    fetchSelectedDateInfo();
  }, []);

  useEffect(() => {
    // console.log({back: props.navigation.getParam('back')});
    if (state.selectedDate && !isFirst.current) {
      fetchSelectedDateInfo();
    } else {
      isFirst.current = false;
    }
  }, [state.selectedDate, props.navigation.getParam('back')]);

  const {logs, income, notes, date} = dailyInfo;

  const onPressDetail = () => {
    props.navigation.navigate('JournalDetails', {dailyInfo});
  };

  const navigateToIncome = () => {
    props.navigation.navigate('JournalAddIncome', {dailyInfo});
  };

  const renderBody = () => (
    <View style={{width: '100%'}}>
      <Text style={journal_selected_day}>
        {selectedDate ?
          moment(selectedDate).format('dddd - DD, MMMM, YYYY') :
          'Select a date'}
      </Text>

      <DatepickerCT
        style={mt16}
        name="selectedDate"
        onChange={onChange}
        value={selectedDate}
        max={TODAY}
      />

      <Text style={journal_achievement}>Achievement</Text>

      <View style={journal_money_box}>
        <SvgXml xml={moneyIc} height='124' width='124' />

        <DisplayMoney logs={logs} style={{marginVertical: 16}} />

        <ButtonCT
          style={w_100}
          UserTextStyle={{fontWeight: 'bold', fontSize: 16}}
          type="LINEAR"
          title={logs.length !== 0 ? 'Edit spending' : 'Add spending'}
          onPress={onPressDetail}
        />
      </View>
    </View>
  );

  return (
    <View style={f1_wh_100} >
      <BottomAppHeader currentTab="Journal" income={income} />

      <View style={bottom_App_Body}>{renderBody()}</View>

      <TouchableOpacity style={journal_income} onPress={navigateToIncome}>
        <Text style={journal_income_title}>Income</Text>
      </TouchableOpacity>
    </View>
  );
};

Journal.defaultProps = {};
Journal.propTypes = {
  navigation: PropTypes.shape().isRequired,
};

export default Journal;
