import initialState from './initialState';
import {SavePathActions} from '../../Constant';

const {
  SET_PATH,
  DELETE_PATH,
  ACTIVE_REPORT_TAB,
  DELETE_DETAIL_PATH,
  TAB_NAME,
  DELETE_REPORT_DETAIL_PATH,
} = SavePathActions;

const savePath = (state = initialState.savePath, action) => {
  switch (action.type) {
    case SET_PATH: {
      console.log('SET_PATH', action.data);
      return {...state, ...action.data};
    }
    case DELETE_PATH: {
      // delete all
      console.log('DELETE_PATH');
      // activeNewTab, activeReportTab, navigateFromTab, tabName
      delete state.activeNewTab;
      delete state.activeReportTab;
      delete state.navigateFromTab;
      delete state.tabName;
      delete state.notificationDetailTableLastView;
      delete state.monthlyDetailTableLastView;
      return {...state};
    }
    case DELETE_DETAIL_PATH: {
      // delete just detail path
      console.log('DELETE_DETAIL_PATH');
      delete state[ACTIVE_REPORT_TAB];
      delete state[TAB_NAME];
      return {...state};
    }
    case DELETE_REPORT_DETAIL_PATH: {
      // On Patient Detail Go Back Click => delete noti and mon detail table
      console.log('DELETE_REPORT_DETAIL_PATH');
      delete state.notificationDetailTableLastView;
      delete state.monthlyDetailTableLastView;
      return {...state};
    }
    default: {
      return {...state};
    }
  }
};

export default savePath;
