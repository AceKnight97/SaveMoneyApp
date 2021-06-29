import AppFlowActions from '../../Constant/appFlowActions';
import initialState from './initialState';
import auth from '../../Helper/auth';

const login = (state = initialState.login, action) => {
  switch (action.type) {
    case AppFlowActions.LOGIN_COMPLETE: {
      auth.login(action.data);
      return action.data;
    }
    default: {
      return state;
    }
  }
};

export default login;
