import moment from 'moment';
import _ from 'lodash';
import fetchDailyInfo from '../../Apollo/Functions/Fetch/fetchDailyInfo';
import handleAddDailyInfo from '../../Apollo/Functions/Handle/handleAddDailyInfo';
import handleUpdateIncome from '../../Apollo/Functions/Handle/handleUpdateIncome';
import {showNotification} from '../../Helper/notification';

export const a = '';

export const queryDailtyInfo = async (date = undefined) => {
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


export const mutationIncome = async (data = {}) => {
  const {
    id, income, notes, date,
  } = data;
  if (id) {
    try {
      await handleUpdateIncome({
        input: {
          id,
          income: Math.round(income * 100) / 100,
          notes,
        },
      });
      showNotification('Successfully updated income');
      return true;
    } catch (error) {
      console.log('Failed to update income: ', error);
      showNotification('Failed to updated income');
      return false;
    }
  } else {
    try {
      await handleAddDailyInfo({
        input: {
          date: moment(date).format('DD/MM/YYYY'),
          logs: [],
          income: Math.round(income * 100) / 100,
          notes,
        },
      });
      showNotification('Successfully added daily info');
      return true;
    } catch (error) {
      console.log('Failed to add dailty: ', error);
      showNotification('Failed to add daily info');
      return false;
    }
  }
};
