import moment from 'moment';
import handleChangePassword from '../../Apollo/Functions/Handle/handleChangePassword';
import handleUpdateUser from '../../Apollo/Functions/Handle/handleUpdateUser';
import {MESSAGES} from '../../Constant/home';
import {showNotification} from '../../Helper/notification';

const PROFILE_MESSAGES = {
  FAILED_UPDATED: 'Failed to change user info. Please check info format and try again!',
};

const {
  FAILED_UPDATED,
} = PROFILE_MESSAGES;

export const mutationUpdateUser = async (data = {}) => {
  const {
    username, address, dob, gender, phone,
  } = data;
  try {
    await handleUpdateUser({
      profileInput: {
        username,
        address,
        dob: dob ? moment(dob).toISOString() : undefined,
        gender,
        phone,
      },
    });
    return true;
  } catch (error) {
    showNotification(FAILED_UPDATED);
    console.log('Failed to update profile: ', error);
    return false;
  }
};

export const mutationChangePassword = async (password = '', newPassword = '') => {
  try {
    await handleChangePassword({
      password,
      newPassword,
    });
    return {};
  } catch (error) {
    console.log('Failed to change password: ', error);
    showNotification(MESSAGES.CHANGE_PASSWORD_FAILED);
    return {passwordErr: MESSAGES.INCORRECT_PASSWORD};
  }
};
