import _ from 'lodash';
import moment from 'moment';
import React, {useEffect, useRef} from 'react';
import {View} from 'react-native';
import LineChartCT from '../../Components/Charts/LineChartCT';
import BottomAppHeader from '../../Components/Header/bottomAppHeader';
import MonthlySummary from '../../Components/UI/MonthlySummary';
import MonthSelector from '../../Components/UI/MonthSelector';
import auth from '../../Helper/auth';
import {useMergeState} from '../../Helper/customHooks';
import GlobalStyles from '../../Styles';
import ViewsStyle from '../Style';
import {queryInsight} from './helper';
import InsightStyle from './_insight';

const {f1_wh_100, mt24} = GlobalStyles;
const {bottom_App_Body} = ViewsStyle;
const {body, top} = InsightStyle;

const Insights = (props) => {
  const isTheFirst = useRef(true);
  const [state, setState] = useMergeState({
    selectedMonth: moment().subtract(1, 'months'),
    thisMonthData: [],
    otherMonthData: [],
    loading: false,
    firstDate: moment().subtract(10, 'years'),
  });

  const getFirstDate = async ()=>{
    const {firstDate} = await auth.getLoginData();
    if (firstDate) {
      setState({firstDate: moment(firstDate, 'DD/MM/YYYY')});
    }
  };

  const fetchInishgtData = async (isFirst = false) => {
    setState({loading: true});

    const {
      thisMonthData, otherMonthData, thisMonthIncomes, otherMonthIncomes,
      isSuccess,
    } = await queryInsight(state.selectedMonth, isFirst);

    const obj = {loading: false};
    if (isSuccess) {
      _.assign(obj, {otherMonthData, otherMonthIncomes});
      if (isFirst) {
        _.assign(obj, {thisMonthData, thisMonthIncomes});
      }
    }
    setState(obj);
  };

  const onChange = (key, value) => {
    setState({[key]: value});
  };

  const {
    selectedMonth,
    thisMonthData, otherMonthData,
    thisMonthIncomes, otherMonthIncomes,
    firstDate,
  } = state;

  useEffect(() => {
    fetchInishgtData(isTheFirst.current);
    if (isTheFirst.current) {
      getFirstDate();
      isTheFirst.current = false;
    }
  }, [state.selectedMonth]);

  const renderBody = () => (
    <View style={body}>

      <View style={top}>
        <LineChartCT
          thisMonthData={thisMonthData}
          otherMonthData={otherMonthData}
        />
      </View>

      <MonthSelector
        onChange={onChange}
        selectedMonth={selectedMonth}
        disabled={moment(firstDate).valueOf()> moment(selectedMonth).valueOf()}
      />

      <MonthlySummary style={mt24}
        data={[
          {
            title: moment(selectedMonth).format('MMMM'),
            data: otherMonthData,
            income: otherMonthIncomes,
          },
          {
            title: 'This month',
            data: thisMonthData,
            income: thisMonthIncomes,
          },
        ]}
      />


    </View>
  );

  return (
    <View style={f1_wh_100}>
      <BottomAppHeader currentTab="Insight" />

      <View style={bottom_App_Body}>{renderBody()}</View>
    </View>
  );
};

Insights.defaultProps = {};
Insights.propTypes = {};

export default Insights;
