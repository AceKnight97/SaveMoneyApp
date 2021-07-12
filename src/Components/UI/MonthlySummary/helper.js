import _ from 'lodash';

export const a = ' ';

export const getContent = (array = [], income = 0) => [
  {
    title: '- Total:',
    data: Math.ceil(_.sum(array) * 100) / 100,
  },
  {
    title: '- Max:',
    data: _.max(array),
  },
  {
    title: '- Average:',
    data: Math.ceil(_.mean(array) * 100) / 100,
  },
  {
    title: '- Min:',
    data: _.min(array),
  },
  {
    title: '- Incomes:',
    data: income,
  },
  {
    title: '- Money left:',
    data: Math.ceil((income - _.sum(array)) * 100) / 100,
  },
];
