import handleSignIn from '../Apollo/Functions/Handle/handleSignIn';
import {MESSAGES} from '../Constant/home';

const {
  FORGOT_SUCCESS_SENDING,
  FORGOT_PASSWORD_FAILED,
  LOGIN_FAILED,
  LOGIN_ERROR,
  RESET_SUCCESS_SENDING,
  INVALID_CODE,
} = MESSAGES;

export const a = 'a';

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
    return {};
  } catch (error) {
    console.log('Failed to login: ', error);
    return {passwordErr: LOGIN_ERROR, loading: false};
  }
};
