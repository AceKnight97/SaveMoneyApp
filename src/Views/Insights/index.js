import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';
import GlobalStyles from '../../Styles';
import { colors } from '../../Constant/color';
import { calcMoney, getMoneyAndSess, saveTodayNote } from '../../Ulti';
import InsightsStyles from '../../Styles/BottomAppPages/insights'
import {Today, Sessions} from '../../Constant';
import {getMyData, setMyData} from '../../Redux/storage';

const {mainView } = InsightsStyles;
class Insights extends Component {
  constructor(props) {
    super(props);
    this.state = {
      money: 0,
      MORNING: [],
      AFTERNOON:[],
      NIGHT: [],
      LocalData: ''
    };
  }

  setDefaultData = async () => {
    const LocalData = await getMyData();
    console.log('LocalData: ',LocalData)
  // const {money, MORNING, AFTERNOON, NIGHT} = await getMoneyAndSess(Today);
    this.setState({LocalData});
  };

  componentDidMount = () => {
    this.setDefaultData();
    // saveTodayNote(); // RESET DATA
  };

  render() {
    const { LocalData } = this.state;
    return (
      <View style={mainView}>
        <Text style={{color: colors.green}}>{LocalData}</Text>
       {/* <Text style={{color: colors.green}}>{money}</Text>
       <Text style={{color: colors.green}}>{MORNING}</Text>
       <Text style={{color: colors.green}}>{AFTERNOON}</Text>
       <Text style={{color: colors.green}}>{NIGHT}</Text> */}
      </View>
    );
  }
}

Insights.defaultProps = {};
Insights.propTypes = {};

export default Insights;
