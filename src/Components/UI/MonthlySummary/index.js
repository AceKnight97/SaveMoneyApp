import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import {View, Text} from 'react-native';
import GlobalStyles from '../../../Styles';
import {getContent} from './helper';
import MonthlySummaryStyle from './_monthlySummary';

const {divider_v, strip} = GlobalStyles;

const green = 'forestgreen';
const red = 'orangered';
const yellow = 'orange';

const {
  monthly_summary_part, monthly_summary_content, main, monthly_summary_title,
} =MonthlySummaryStyle;

const MonthlySummary = (props) => {
  const {
    style, data,
  } = props;

  if (data.length === 0) {
    return <Text style={style}>There is no data</Text>;
  }

  const formatThisMonth = (arrayMain = [], compareArr = []) => {
    _.forEach(arrayMain, (x, i) => {
      const {data} = x;
      _.assign(x, {
        color: data < compareArr[i].data ?
        green : data > compareArr[i].data ?
            red : yellow,
      });
    });
    const lastItem = _.last(arrayMain);
    _.assign(lastItem, {color: lastItem.color === green ? red : green});
    return arrayMain;
  };

  const lastMonthSummary = getContent(data[0].data, data[0].income);

  const thisMonthSummary = getContent(data[1].data, data[1].income);

  const finalSummarry = formatThisMonth(thisMonthSummary, lastMonthSummary);

  const renderPart = (title = '', content = []) => (
    <View style={monthly_summary_part}>
      <Text style={monthly_summary_title}>{title}</Text>
      {
        _.map(content, (x, i) => (
          <View key={i} style={[monthly_summary_content,
          i%2 ===0? strip:{},
          ]}>
            <Text>{x.title}</Text>
            <Text style={{color: x.color}} >{`$${x.data}`}</Text>
          </View>
        ))
      }
    </View>
  );

  return (
    <View style={[main, style]}>

      {renderPart(data[0].title, lastMonthSummary)}

      <View style={divider_v} />

      {renderPart(data[1].title, finalSummarry)}

    </View>
  );
};
MonthlySummary.defaultProps = {
  style: {},
  data: [],
};
MonthlySummary.propTypes = {
  style: PropTypes.shape(),
  data: PropTypes.arrayOf(PropTypes.shape()),
};

export default MonthlySummary;
