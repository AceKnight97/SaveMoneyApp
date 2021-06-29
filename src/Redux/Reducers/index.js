import {combineReducers} from 'redux';
import _ from 'lodash';

import AppFlowActions from '../../Constant/appFlowActions';
import initialState from './initialState';
import auth from '../../Helper/auth';

import isLoading from './isLoading';
import login from './login';
import savePath from './savePath';
import notifications from './notifications';
import unreadNotificationCount from './unreadNotificationCount';
import isEndOfNotifications from './isEndOfNotifications';

const appReducer = combineReducers({
  isLoading,
  login,
  savePath,
  notifications,
  unreadNotificationCount,
  isEndOfNotifications,
});

const rootReducer = (state, action) => {
  switch (action.type) {
    case AppFlowActions.LOGOUT_REQUEST: {
      // *: Leave room
      auth.logout();
      // console.clear();
      return initialState;
    }
    default: {
      return appReducer(state, action);
    }
  }
};

export default rootReducer;
