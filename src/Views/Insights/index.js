import React from 'react';
import {Text, View} from 'react-native';
import BottomAppHeader from '../../Components/Header/bottomAppHeader';
import GlobalStyles from '../../Styles';
import InsightsStyles from '../../Styles/BottomAppPages/insights';
import ViewsStyle from '../Style';
import MonthSelector from '../../Components/UI/MonthSelector';
import {useMergeState} from '../../Helper/customHooks';
import moment from 'moment';

const {f1_wh_100, mt16, w_100} = GlobalStyles;
const {bottom_App_Body} = ViewsStyle;
const {mainView} = InsightsStyles;

const Insights = (props) => {
  const [state, setState] = useMergeState({
    selectedMonth: moment().subtract(1, 'months'),
  });

  const onChange = (key, value) => {
    setState({[key]: value});
  };

  const {selectedMonth} = state;

  const renderBody = () => (
    <View style={{
      height: '100%',
      width: '100%',
      // backgroundColor: 'red',
      display: 'flex',
      alignItems: 'center',
    }}>

      <View style={{
        height: '36%',
        width: '100%',
        backgroundColor: 'red',
      }}/>

      <MonthSelector
        style={{marginTop: 36}}
        onChange={onChange}
        selectedMonth={selectedMonth}
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
