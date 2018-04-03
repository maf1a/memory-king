import { takeLatest, all } from 'redux-saga/effects';
import { FORM_SUBMITTED, LOGIN_FORM_SUBMITTED, SAVE_USER_ID } from '../actions/types';

import newUserSaga from './new-user-saga';
import loginSaga from './login-saga';
import { saveUserIDSaga } from './user-saga';

function* rootSaga() {
  all([
    yield takeLatest(FORM_SUBMITTED, newUserSaga),
    yield takeLatest(LOGIN_FORM_SUBMITTED, loginSaga),
    // yield takeLatest(SAVE_USER_ID, saveUserIDSaga)
  ])
}

export default rootSaga;
