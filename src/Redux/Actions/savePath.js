import {SavePathActions} from '../../Constant';

export const setPathRequest = (data) => ({
  type: SavePathActions.SET_PATH,
  data,
});

export const deletePathRequest = (data) => ({
  type: SavePathActions.DELETE_PATH,
  data,
});

export const deleteDetailPathRequest = (data) => ({
  type: SavePathActions.DELETE_DETAIL_PATH,
  data,
});

export const deleteReportDetailPathRequest = (data) => ({
  type: SavePathActions.DELETE_REPORT_DETAIL_PATH,
  data,
});
