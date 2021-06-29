import { fork } from 'redux-saga/effects';

import loginFlow from './login';
import reloadFlow from './reload';
import notificationsFlow from './notifications';

export default function* root() {
  yield fork(loginFlow);
  // yield fork(reloadFlow);
  // yield fork(notificationsFlow);
}
