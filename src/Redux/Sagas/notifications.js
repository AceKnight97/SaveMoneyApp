import _ from 'lodash';
import {take, all, call, put, fork} from 'redux-saga/effects';

import AppFlowActions from '../../Constant/appFlowActions';

const fetchNotification = () => {};
const fetchNotifications = () => {};
const fetchCountNotificationUnRead = () => {};

const fetchNotificationFunction = async (sendingData) => {
  try {
    return await fetchNotification(sendingData);
  } catch (error) {
    console.error('Failed to fetch notification', error);
    return [];
  }
};

const fetchNotificationsFunction = async (sendingData) => {
  try {
    return await fetchNotifications(sendingData);
  } catch (error) {
    console.error('Failed to fetch notifications', error);
    return [];
  }
};

const fetchUnreadNotificationsCountFunction = async () => {
  try {
    return await fetchCountNotificationUnRead();
  } catch (error) {
    console.error('Failed to fetch unread notifications count', error);
    return 0;
  }
};

export function* fetchNotificationsRequest() {
  const INFINITE = true;
  while (INFINITE) {
    const request = yield take(AppFlowActions.FETCH_NOTIFICATIONS_REQUEST);
    const {data} = request;
    if (data.isLoadMore) {
      const notifications = yield call(
        fetchNotificationsFunction,
        data.sendingData,
      );
      yield put({
        type: AppFlowActions.FETCH_NOTIFICATIONS_COMPLETE,
        data: {
          notifications,
          isLoadMore: true,
        },
      });
      if (notifications.length > 0) {
        yield put({
          type: AppFlowActions.UPDATE_IS_END_OF_NOTIFICATIONS_REQUEST,
          data: false,
        });
      } else {
        yield put({
          type: AppFlowActions.UPDATE_IS_END_OF_NOTIFICATIONS_REQUEST,
          data: true,
        });
      }
    } else {
      const [notifications, unreadNotificationsCount] = yield all([
        call(fetchNotificationsFunction, data.sendingData),
        call(fetchUnreadNotificationsCountFunction),
      ]);
      yield put({
        type: AppFlowActions.FETCH_NOTIFICATIONS_COMPLETE,
        data: {
          notifications,
          isLoadMore: false,
        },
      });
      yield put({
        type: AppFlowActions.UPDATE_UNREAD_NOTIFICATION_COUNT_REQUEST,
        data: unreadNotificationsCount,
      });
      if (notifications.length > 0) {
        yield put({
          type: AppFlowActions.UPDATE_IS_END_OF_NOTIFICATIONS_REQUEST,
          data: false,
        });
      } else {
        yield put({
          type: AppFlowActions.UPDATE_IS_END_OF_NOTIFICATIONS_REQUEST,
          data: true,
        });
      }
    }
  }
}

export function* fetchNotificationRequest() {
  const INFINITE = true;
  while (INFINITE) {
    const request = yield take(AppFlowActions.FETCH_NOTIFICATION_REQUEST);
    const {data} = request;
    const notification = yield call(
      fetchNotificationFunction,
      data.sendingData,
    );
    yield put({
      type: AppFlowActions.FETCH_NOTIFICATION_COMPLETE,
      data: {
        notification,
        isLoadMore: false,
      },
    });
    yield put({
      type: AppFlowActions.ADD_UNREAD_NOTIFICATION_COUNT_REQUEST,
    });
  }
}

export default function* notificationsFlow() {
  yield fork(fetchNotificationsRequest);
  yield fork(fetchNotificationRequest);
}
