import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import { pathToPHP } from '../config';
import { CHECKING_LOGIN, USER_LOGGED_IN, LOGIN_FETCH_ERRORS, SAVE_USER_ID } from '../actions/types';

function* loginSaga({ payload }) {
  yield put({ type: CHECKING_LOGIN, payload: true })
  const { email, password, name } = payload;
  try {
    const user = yield call(() => {
      return axios.get(`${pathToPHP}/scripts/login.php/?email=${email}&password=${password}`)
      .then(resp => {
        const { user, type, message } = resp.data;
        if (type === 'error') throw message;
        return resp.data;
      }).catch((e) => { throw e });
    });
    console.log(user);
    yield put({ type: USER_LOGGED_IN, payload: user });
    yield put({ type: SAVE_USER_ID, payload: user });
    Actions.screenMain();
  } catch (e) {
    yield put({ type: LOGIN_FETCH_ERRORS, payload: Array(e) });
  }
}

export default loginSaga;
