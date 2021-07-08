import React, {Component} from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import _ from 'lodash';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import GlobalStyles from '../../Styles';
import CardsList from './cardsList';
import {Today, Sessions} from '../../Constant';
import ButtonCT from '../../Components/Buttons/ButtonCT';
import {colors} from '../../Constant/color';
import CompleteAddingStyles from '../../Styles/AddingPages/completeAdding';

const {cent} = GlobalStyles;
const {
  mainView,
  header,
  buttonsSty,
  body,
  confirmQuestion,
  headerText,
  showSessionStyle
} = CompleteAddingStyles;

const dailyImages = {
  Monday: require('../../Images/AddSpending/CompleteAdding/mon.jpg'),
  Tuesday: require('../../Images/AddSpending/CompleteAdding/tue.jpg'),
  Wednesday: require('../../Images/AddSpending/CompleteAdding/web.jpg'),
  Thursday: require('../../Images/AddSpending/CompleteAdding/thu.jpg'),
  Friday: require('../../Images/AddSpending/CompleteAdding/fri.jpg'),
  Saturday: require('../../Images/AddSpending/CompleteAdding/sat.jpg'),
  Sunday: require('../../Images/AddSpending/CompleteAdding/sun.jpg'),
};
const weekday = moment().format('dddd');
const todayImg = dailyImages[weekday];
// const paramData = this.props.navigation.getParam('data');
// const update = this.props.navigation.getParam('update');

class CompleteAdding extends Component {
  constructor(props) {
    super(props);
    this.state = {
      money: 0,
      date: moment(Today).format('dddd, MMMM Do, YYYY'),
      MORNING: [],
      AFTERNOON: [],
      NIGHT: [],
    };
  }

  componentDidMount = () => {
    this.setDefaultData();
    console.log('weekday:', weekday);
  };

  setDefaultData = async () => {
    const date = this.props.navigation.getParam('date', Today); // date is converted
    const data = this.props.navigation.getParam('data', Today); // date is converted
    const {money, MORNING, AFTERNOON, NIGHT} = data;
    console.log('my fac data: ', data);
    const formatedDate = moment(date).format('dddd, MMMM Do, YYYY');
    this.setState({money, MORNING, AFTERNOON, NIGHT, date: formatedDate});
  };

  header = () => {
    const {money, date} = this.state;
    return (
      <View style={header}>
        <View style={{marginBottom: 24}}>
          <Text style={headerText}>Wellcome To Save Note</Text>
        </View>
        <View style={cent}>
          <Image source={todayImg} style={{width: '100%', height: 220}} />
        </View>

        <View style={confirmQuestion}>
          <Text style={{}}>You spend</Text>
          <Text style={{fontWeight: 'bold'}}>{` $${money} `}</Text>
          <Text style={{}}>on</Text>
          <Text style={{fontWeight: 'bold'}}>{` ${date}?`}</Text>
        </View>

        <View style={buttonsSty}>
          <ButtonCT
            type="NONE"
            mainViewStyle={{marginLeft: -24}}
            title="Back"
            // onPress={() => this.props.navigation.navigate('AddSpending', {date: this.props.navigation.getParam('date', Today)})}
            onPress={() => this.props.navigation.goBack()}
          />
          <ButtonCT
            type="LINEAR"
            title="Complete"
            onPress={() => this.props.navigation.navigate('StackBottomApp')}
          />
        </View>
      </View>
    );
  };

  showSessionData = (session = '') => {
    const data = this.state[session];
    const len = data.length;
    console.log('data: ', data);

    return (
      <View
        style={showSessionStyle}>
        <View style={{}}>
          <Text style={{fontWeight: 'bold'}}>{session}</Text>
        </View>

        {len !== 0 ? (
          <CardsList data={data} style={{padding: 0}} isComplete /> // borderWidth: 1, borderColor:'blue'
        ) : null}
      </View>
    );
  };

  render() {
    return (
      <View style={mainView}>
        {this.header()}

        <ScrollView showsVerticalScrollIndicator={false} style={body}>
          <View
            style={{flex: 1, width: '100%', height: '100%', paddingBottom: 24}}>
            {_.map(Sessions, (x) => this.showSessionData(x))}
          </View>
        </ScrollView>
      </View>
    );
  }
}

CompleteAdding.defaultProps = {};
CompleteAdding.propTypes = {};

export default CompleteAdding;
