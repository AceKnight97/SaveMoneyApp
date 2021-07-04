import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {colors} from '../../Constant/color';
import InsightsStyles from '../../Styles/BottomAppPages/insights';

const {mainView} = InsightsStyles;
class Insights extends Component {
  constructor(props) {
    super(props);
    this.state = {
      money: 0,
      MORNING: [],
      AFTERNOON: [],
      NIGHT: [],
      LocalData: '',
    };
  }

  render() {
    const {LocalData} = this.state;
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
