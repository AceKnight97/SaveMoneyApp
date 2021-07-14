import currencyFormatter from 'currency-formatter';
import _ from 'lodash';


export const isValidEmail = (email = '') => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email.trim()).toLowerCase());
};

export const getMoneyFromList = (logs = []) =>
  currencyFormatter.format(
      _.sumBy(logs, (x) => parseFloat(x.money)),
      {code: 'USD'},
  );

export const getIncome = (income = 0) =>
  currencyFormatter.format(income, {code: 'USD'});

export const getName = (gender = '', username = '') => { //
  const temp = gender?.toLocaleLowerCase();
  if ( temp=== 'male') {
    return `Mr. ${username || 'you'}`;
  }
  if (temp === 'female') {
    return `Ms. ${username || 'you'}`;
  }
  return `${username || 'you'}`;
};
