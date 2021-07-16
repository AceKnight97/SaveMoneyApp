import _ from 'lodash';
import moment from 'moment';
import handleAddDailyInfo from '../../Apollo/Functions/Handle/handleAddDailyInfo';
import handleUpdateIncome from '../../Apollo/Functions/Handle/handleUpdateIncome';
import handleUpdateLogs from '../../Apollo/Functions/Handle/handleUpdateLogs';
import {showNotification} from '../../Helper/notification';

export const formatLogs = (logs = []) => {
  if (logs.length === 0) {
    return [];
  }
  return _.map(logs, (x) => ({
    title: x.title,
    money: Math.round(x.money * 100) / 100,
    details: x.details,
  }));
};

export const mutationLogs = async (data = {}) => {
  const {
    id,
    date,
    logs, // income, notes,
  } = data;
  if (id) {
    try {
      await handleUpdateLogs({
        input: {
          id,
          logs: formatLogs(logs),
        },
      });
      showNotification('Successfully updated logs');
      return true;
    } catch (error) {
      console.log('Failed to updated logs: ', error);
      showNotification('Failed to updated logs');
      return false;
    }
  } else {
    try {
      console.log({
        input: {
          date: moment(date).format('DD/MM/YYYY'),
          logs: formatLogs(logs),
          income: 0,
          notes: '',
        },
        logs: formatLogs(logs),
      });
      await handleAddDailyInfo({
        input: {
          date: moment(date).format('DD/MM/YYYY'),
          logs: formatLogs(logs),
          income: 0,
          notes: '',
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

export const mutationIncome = async (data = {}) => {
  const {id, income, notes, date} = data;
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
