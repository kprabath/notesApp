import {call, put, takeEvery, takeLeading} from 'redux-saga/effects';
import {
  SET_USER_EMAIL,
  SET_USER_EMAIL_SUCESS,
  SET_USER_NAME,
  SET_USER_NAME_SUCCESS,
} from '../../constants';

function* setUserName({payload}) {
  yield put({type: SET_USER_NAME_SUCCESS, payload});
}

function* setUserEmail({payload}) {
  yield put({type: SET_USER_EMAIL_SUCESS, payload});
}

export default function* commonSaga() {
  yield takeEvery(SET_USER_NAME, setUserName);
  yield takeEvery(SET_USER_EMAIL, setUserEmail);
}
