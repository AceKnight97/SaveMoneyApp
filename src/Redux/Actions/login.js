import AppFlowActions from '../../Constant/appFlowActions';

export const loginRequest = (data) => ({
  type: AppFlowActions.LOGIN_REQUEST,
  data,
});

export const logoutRequest = (data) => ({
  type: AppFlowActions.LOGOUT_REQUEST,
  data,
});
