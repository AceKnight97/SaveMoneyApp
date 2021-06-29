import _ from 'lodash';
import currencyFormatter from 'currency-formatter';

export const getMoneyFromList = (logs = []) =>
  currencyFormatter.format(
    _.sumBy(logs, (x) => parseFloat(x.money)),
    {code: 'USD'},
  );

export const getIncome = (income = 0) =>
  currencyFormatter.format(income, {code: 'USD'});
