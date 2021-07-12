import React, {useEffect, useRef} from 'react';
import {Text, View} from 'react-native';
import BottomAppHeader from '../../Components/Header/bottomAppHeader';
import GlobalStyles from '../../Styles';
import ViewsStyle from '../Style';
import MonthSelector from '../../Components/UI/MonthSelector';
import MonthlySummary from '../../Components/UI/MonthlySummary';
import {useMergeState} from '../../Helper/customHooks';
import LineChartCT from '../../Components/Charts/LineChartCT';
import moment from 'moment';
import _ from 'lodash';
import InsightStyle from './_insight';
import {queryInsight} from './helper';

const {f1_wh_100, mt16, mt24, w_100} = GlobalStyles;
const {bottom_App_Body} = ViewsStyle;
const {main} = InsightStyle;

const Insights = (props) => {
  const isTheFirst = useRef(true);
  const [state, setState] = useMergeState({
    selectedMonth: moment().subtract(1, 'months'),
    thisMonthData: [],
    otherMonthData: [],
    loading: false,
  });

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
  } = state;
  console.log({
    thisMonthData,
    otherMonthData,
  });

  useEffect(() => {
    fetchInishgtData(isTheFirst.current);
    if (isTheFirst.current) {
      isTheFirst.current = false;
    }
  }, [state.selectedMonth]);

  const renderBody = () => (
    <View style={{
      height: '100%',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-evenly',
    }}>

      <View style={{
        height: '50%',
        width: '100%',
        // backgroundColor: 'red',
      }}>
        <LineChartCT
          thisMonthData={thisMonthData}
          otherMonthData={otherMonthData}
        />
      </View>

      <MonthSelector
        onChange={onChange}
        selectedMonth={selectedMonth}
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
