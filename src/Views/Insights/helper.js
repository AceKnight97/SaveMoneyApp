import _ from 'lodash';
import moment from 'moment';
import fetchInsight from '../../Apollo/Functions/Fetch/fetchInsight';
import auth from '../../Helper/auth';


const getSpending = (logs = []) => Math.ceil(_.sumBy(logs, (x) => x.money) * 100) / 100;

const getMonthData = (date = undefined, data = []) => {
  const monthIndex = moment(date, 'DD/MM/YYYY').format('MM');
  const year = moment(date, 'DD/MM/YYYY').format('YYYY');

  const filterData = _.filter(data, (x) => x.date.includes(`/${monthIndex}/`));

  const monthDays = _.map(_.range(1, moment(date, 'DD/MM/YYYY').daysInMonth() + 1),
      (x) => `${x < 10 ? `0${x}` : x}/${monthIndex}/${year}`);

  const spendings = [];
  let incomes = 0;

  _.forEach(monthDays, (x) => {
    const item = _.find(filterData, (y) => y.date === x);
    spendings.push(getSpending(item?.logs));
    incomes += item?.incomes || 0;
  });

  console.log({monthDays, spendings, incomes});
  return {spendings, incomes};
};


export const queryInsight = async (date = moment().subtract(1, 'months'), isFirst = false) => {
  const data = {
    from: moment(date).startOf('months').format('DD/MM/YYYY'),
    to: moment(date).endOf('months').format('DD/MM/YYYY'),
  };
  if (isFirst) {
    _.assign(data, {
      from: moment().subtract(1, 'months').startOf('months').format('DD/MM/YYYY'),
      to: moment().endOf('months').format('DD/MM/YYYY'),
    });
  }
  const {from, to} = data;
  // console.log({isFirst, from, to});
  try {
    const data = await fetchInsight({from, to});

    let thisMonthData = [];
    let thisMonthIncomes = 0;
    if (isFirst) {
      const thisMonth = getMonthData(to, data);
      thisMonthData = thisMonth.spendings;
      thisMonthIncomes = thisMonth.incomes;
    }

    const otherMonth = getMonthData(from, data);
    const otherMonthData = otherMonth.spendings;
    const otherMonthIncomes = otherMonth.incomes;

    return {
      thisMonthData,
      otherMonthData,

      thisMonthIncomes,
      otherMonthIncomes,
      isSuccess: true,
    };
  } catch (error) {
    console.log('Failed to fetch insight: ', error);
    return {isSuccess: false};
  }
};
