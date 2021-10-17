import {call, put, takeEvery, takeLatest} from '@redux-saga/core/effects';
import {store} from '..';
import {
  ADD_USER_NOTES,
  CREATE_NOTES,
  CREATE_USER,
  GET_USER_NOTES,
  GET_USER_NOTES_SUCESS,
  USER_DATA_FOUND,
  USER_DATA_FOUND_FAIL,
  USER_DATA_FOUND_SCUCESS,
} from '../../constants';
import {
  createNotes,
  getAllNotesForUser,
} from '../../repositories/localapi/ApplicationApi';
import {
  createUser,
  lookForSessions,
  StatusCodes,
} from '../../repositories/localapi/AuthApi';
import {Reducers} from '../../types';

interface TSaga {
  type: string;
  payload?: any;
  success?: Function;
}

function* setUserState() {
  try {
    const data = yield call(lookForSessions);
    if (
      data === StatusCodes.NO_SIGNED_IN_USERS ||
      data === StatusCodes.CREATE_USER_ERROR
    ) {
      yield put({type: USER_DATA_FOUND_FAIL});
      return;
    }
    yield put({type: USER_DATA_FOUND_SCUCESS, payload: {user: data}});
  } catch (error) {}
}

function* createUserObj({payload}: TSaga) {
  try {
    const user = yield call(createUser, payload);
    yield put({type: USER_DATA_FOUND_SCUCESS, payload: {user}});
    return;
  } catch (err) {}
}

function* createNoteObj({payload, success}: TSaga) {
  try {
    yield call(createNotes, payload);
    yield getUserNotes();
    success?.();
  } catch (e) {}
}

function* getUserNotes() {
  try {
    const {
      application: {user},
    } = store.getState() as Reducers;
    console.log('user is ', user);
    const notes = yield call(getAllNotesForUser, {id: user?._id});
    yield put({type: GET_USER_NOTES_SUCESS, payload: {notes}});
  } catch (er) {
    console.warn(er);
  }
}

export default function* commonSaga() {
  yield takeEvery(USER_DATA_FOUND, setUserState);
  yield takeLatest(CREATE_USER, createUserObj);
  yield takeLatest(CREATE_NOTES, createNoteObj);
  yield takeLatest(GET_USER_NOTES, getUserNotes);
}
