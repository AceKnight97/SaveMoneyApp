import PropTypes from 'prop-types';
import React from 'react';
import {Text, View} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {getIncome, getMoneyFromList} from '../../../Helper';
import moneyBagIc from '../../../Images/Components/MoneyBox/moneyBag.svg';
import DisplayMoneyStyle from './_displayMoney';

const {mainView, money_text} = DisplayMoneyStyle;

const DisplayMoney = (props) => {
  const {style, logs, isIcon, income} = props;
  return (
    <View style={[mainView, style]}>
      {income ? (
        <Text style={money_text}>{getIncome(income)}</Text>
      ) : (
        <Text style={money_text}>{getMoneyFromList(logs)}</Text>
      )}
      {isIcon && (
        <SvgXml
          xml={moneyBagIc}
          width="32"
          height="32"
          style={{marginLeft: 16}}
        />
      )}
    </View>
  );
};
DisplayMoney.defaultProps = {
  style: {},
  logs: [],
  isIcon: false,
  income: undefined,
};
DisplayMoney.propTypes = {
  logs: PropTypes.arrayOf(PropTypes.shape()),
  style: PropTypes.shape(),
  isIcon: PropTypes.bool,
  income: PropTypes.number,
};

export default DisplayMoney;
