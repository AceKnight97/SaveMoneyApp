import _ from "lodash";
import moment from "moment";

export const a = '';

const getPhoneFormated = (phone = '') => {
  if (!phone) {
    return '';
  }
  return `${phone.slice(0, 3)} - ${phone.slice(3, 6)} - ${phone.slice(6, 10)}`;
};

export const getUerInfo = (patientData = {}) => {
  // if (_.isEmpty(patientData)) {
  //   return [];
  // }
  return [
    {
      title: 'Email:',
      data: patientData.email || '',
    },
    {
      title: 'Age:',
      data: patientData.dob
        ? `${moment().diff(moment(patientData.dob), 'years')}`
        : '',
    },
    {
      title: 'Gender:',
      data: patientData.gender || '',
    },
    {
      title: 'Address:',
      data: patientData.address || '',
    },
    {
      title: 'Phone:',
      data: getPhoneFormated(patientData.phone),
    },
    {
      title: 'Dob:',
      data: patientData.dob
        ? moment(patientData.dob, 'YYYY-DD-MM').format('DD-MM-YYYY')
        : '',
    },
  ];
};

export const getLogInfo = (data = {}) => {
  const {
    totalIncome, totalSpending, moneyLeft, firstDate,
  } = data;
  return [
    {
      title: 'Sign up date:',
      data: data.signUpDate
        ? moment(data.signUpDate).format('DD/MM/YYYY')
        : '',
    },
    {
      title: 'First date adding log:',
      data: firstDate || '',
    },
    {
      title: 'Total spending:',
      data: `$${totalSpending || 0}`,
    },
    {
      title: 'Total income:',
      data: `$${totalIncome || 0}`,
    },
    {
      title: 'Money left:',
      data: `$${moneyLeft || 0}`,
    },
  ];
};

export const getAppInfo = () => {
  const a = '';
  return [
    {
      title: 'Type:',
      data: 'Early access.',
    },
    {
      title: 'Version:',
      data: '0.0.0',
    },
    {
      title: 'Release date:',
      data: moment().format('DD-MM-YYYY'),
    },
  ];
};