import {put, take, fork} from 'redux-saga/effects';

import AppFlowActions from '../../Constant/appFlowActions';

export function* loginRequest() {
  const INFINITE = true;
  while (INFINITE) {
    const request = yield take(AppFlowActions.LOGIN_REQUEST);
    const {data} = request;
    const result = {isSuccess: true, user: {...data}};
    yield put({type: AppFlowActions.LOGIN_COMPLETE, data: result});
  }
}

export default function* loginFlow() {
  yield fork(loginRequest);
}
