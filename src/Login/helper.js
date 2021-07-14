import handleSignIn from '../Apollo/Functions/Handle/handleSignIn';
import handleSignUp from '../Apollo/Functions/Handle/handleSignUp';
import handleResetPassword from '../Apollo/Functions/Handle/handleResetPassword';
import handleForgotPassword from '../Apollo/Functions/Handle/handleForgotPassword';
import {MESSAGES} from '../Constant/home';
import {showNotification} from '../Helper/notification';

const {
  FORGOT_SUCCESS_SENDING,
  FORGOT_PASSWORD_FAILED,
  LOGIN_FAILED,
  LOGIN_ERROR,
  RESET_SUCCESS_SENDING,
  INVALID_CODE,
  SIGN_UP_FAILED,
  SIGN_UP_SUCCESS,
} = MESSAGES;

export const mutationSignIn = async (
    email = '',
    password = '',
    loginRequest = () => {},
) => {
  try {
    const login = await handleSignIn({
      username: email,
      password,
    });
    if (!login.isSuccess) {
      return {passwordErr: LOGIN_FAILED, loading: false};
    }
    const {token, user} = login;
    loginRequest({token, ...user});
    return {loading: false};
  } catch (error) {
    console.log('Failed to login: ', error);
    return {passwordErr: LOGIN_ERROR, loading: false};
  }
};

export const mutationSignUp = async (
    email = '', password = '', username = '',
) => {
  try {
    await handleSignUp({
      email,
      password,
      username,
    });
    showNotification(SIGN_UP_SUCCESS);
    return true;
  } catch (error) {
    showNotification(SIGN_UP_FAILED);
    console.log('Failed to call sign up: ', error);
    return false;
  }
};

export const mutationForgotPassword = async (email = '') => {
  try {
    await handleForgotPassword({
      email,
    });
    showNotification(FORGOT_SUCCESS_SENDING);
    return {};
  } catch (error) {
    console.log('Failed to handleForgotPassword: ', error);
    return {emailErr: FORGOT_PASSWORD_FAILED};
  }
};

export const mutationResetPassword = async (verificationCode = '', password = '') => {
  try {
    await handleResetPassword({
      verificationCode,
      password,
    });
    showNotification(RESET_SUCCESS_SENDING);
    return {};
  } catch (error) {
    console.log('Failed to handleForgotPassword: ', error);
    return {invalidCode: INVALID_CODE};
  }
};
