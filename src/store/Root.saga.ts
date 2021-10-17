import {all} from '@redux-saga/core/effects';
import applicationSaga from './sagas/Applicatio.saga';
import userSaga from './sagas/User.saga';

export default function* rootSaga() {
  yield all([applicationSaga(), userSaga()]);
}
