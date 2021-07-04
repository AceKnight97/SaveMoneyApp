import moment from 'moment';
import fetchDailyInfo from '../../Apollo/Functions/Fetch/fetchDailyInfo';

export const a = '';

export const queryDailtyInfo = async (date = undefined) => {
  console.log({
    date,
    date1: moment(date).format('DD/MM/YYYY'),
  });
  try {
    const dailyInfo = await fetchDailyInfo({
      date: moment(date).format('DD/MM/YYYY'),
    });
    return dailyInfo;
  } catch (error) {
    console.log('Failed to query daily info: ', error);
    return {};
  }
};
