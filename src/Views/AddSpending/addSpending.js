import React, {Component} from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import _ from 'lodash';
import {SvgXml} from 'react-native-svg';
import {StyleSheet, Text, View} from 'react-native';
import GlobalStyles from '../../Styles';
import {calcMoney, getMoneyAndSess, saveTodayNote} from '../../Ulti';
import {Today, Sessions} from '../../Constant';
import InputCT from '../../Components/Inputs/inputCT';
import ButtonCT from '../../Components/Buttons/buttonCT';
import moneyBag from '../../Images/AddSpending/moneyBag.svg';
import { colors } from '../../Constant/color';
import AddSpendingStyles from '../../Styles/AddingPages/addSpending'

const {frsb, flexJusCent} = GlobalStyles;
const {mainView, wrapper, header, body, headerMainView} = AddSpendingStyles;
const {red1, green0} = colors;

class AddSpending extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dailyMoney: 0,
      MORNING: [],
      AFTERNOON: [],
      NIGHT: [],
      date: Today,
      yesterdaySpending: 0,
    };
  }

  recalcYesterday = async () => {
    const {date} = this.state;
    const yesterday = moment(date)
      .subtract(1, 'days')
      .startOf('days')
      .toISOString();
    const {money} = getMoneyAndSess(yesterday);
    this.setState({yesterdaySpending: money});
  };

  componentDidUpdate = (preProps, preState) => {
    if (preState.date !== this.state.date) this.recalcYesterday();
  };

  setDefaultData = async () => {
    const date = this.props.navigation.getParam('date', Today); // from Add Spending use ONCE
    const { money, MORNING, AFTERNOON, NIGHT } = await getMoneyAndSess(date);
    console.log('money, MORNING, AFTERNOON, NIGHT: ',money, MORNING, AFTERNOON, NIGHT)
    this.setState({dailyMoney: money, MORNING, AFTERNOON, NIGHT, date});
  };

  componentDidMount = () => {
    this.setDefaultData();
    // saveTodayNote(); // RESET DATA
  };

  updateDailyMoney = () => {
    const {date, MORNING, AFTERNOON, NIGHT} = this.state;
    const dailyMoney = calcMoney(MORNING, AFTERNOON, NIGHT);
    this.setState({dailyMoney});
    saveTodayNote(MORNING, AFTERNOON, NIGHT, date);
  };

  header = () => {
    const {dailyMoney, date, yesterdaySpending} = this.state;
    const getDate = moment(date).format('dddd, MMMM Do, YYYY');
    const getDailtyMoney = `$${dailyMoney}`;
    let color = '';
    if (parseInt(dailyMoney, 10) > yesterdaySpending) color = red1;
    else if (parseInt(dailyMoney, 10) <= yesterdaySpending) color = green0;
    return (
      <View style={header}>
        <SvgXml xml={moneyBag} width="124" height="124" />
        <View style={headerMainView}>
          <Text style={{fontSize: 32, color}}>{getDailtyMoney}</Text>
        </View>
        <View style={{marginTop: 8}}>
          <Text style={{fontSize: 18}}>{getDate}</Text>
        </View>
      </View>
    );
  };

  body = () => {
    const {MORNING, AFTERNOON, NIGHT} = this.state;
    const sessionData = [MORNING, AFTERNOON, NIGHT];
    console.log('sessionData: ', sessionData);
    _.forEach(sessionData, (y) => {
      _.forEach(y, (x) => {
        if(x.money)    console.log('sessionData values: ', x)
      })
    })
    return (
      <View style={body}>
        {_.map(Sessions, (x, i) => (
          <ButtonCT
            mainViewStyle={{marginTop: i !== 0 ? 56 : 0}}
            type="BORDER"
            title={x}
            onPress={() =>
              this.props.navigation.navigate('AddSession', {
                data: sessionData[i],
                update: (updatedData) => {
                  console.log('updatedData: ', updatedData);
                  console.log('[x]: ',x)
                  this.setState({[x]: updatedData});
                },
              })
            }
          />
        ))}

        {this.footer()}
      </View>
    );
  };

  footer = () => (
    <View
      style={[
        flexJusCent,
        {width: '100%', marginTop: 48, justifyContent: 'space-between'},
      ]}>
      <ButtonCT
        type="NONE"
        mainViewStyle={{marginLeft: -24}}
        title="Back"
        onPress={() => this.props.navigation.navigate('StackBottomApp')}
      />
      <ButtonCT
        colorsCT={['blue', 'red']}
        type="LINEAR"
        title="Reset"
        onPress={() => saveTodayNote([], [], [], this.state.date)}
      />
      <ButtonCT
        type="LINEAR"
        title="Done"
        onPress={() => {
          const {MORNING, AFTERNOON, NIGHT, dailyMoney} = this.state;
          const data = {MORNING, AFTERNOON, NIGHT, money: dailyMoney};
          this.props.navigation.navigate('CompleteAdding', {
            data,
            date: this.state.date,
          });
        }}
      />
    </View>
  );

  render() {
    return (
      <View style={mainView}>
        <View style={wrapper}>
          {this.header()}

          {this.body()}
        </View>
      </View>
    );
  }
}
AddSpending.defaultProps = {};
AddSpending.propTypes = {};
export default AddSpending;
