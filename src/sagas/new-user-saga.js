import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import { pathToPHP } from '../config';
import { USER_LOGGED_IN, FETCHED_ERRORS, SENDING_NEW_USER } from '../actions/types';

function* newUserSaga({ payload }) {
  console.log(NEW_USER_CREATED);
  yield put({ type: SENDING_NEW_USER, payload: true })
  const { email, password, name } = payload;
  try {
    const user = yield call(() => {
      return axios.get(`${pathToPHP}/scripts/add_user.php/?email=${email}&password=${password}&name=${name}`)
      .then(resp => {
        const { user, type, message } = resp.data;
        if (type === 'error') throw message;
        return user;
      }).catch((e) => { throw e });
    });
    yield put({ type: USER_LOGGED_IN, payload: user });
    yield put({ type: SAVE_USER_ID, payload: user.id });
    Actions.screenMain();
  } catch (e) {
    yield put({ type: FETCHED_ERRORS, payload: Array(e) });
  }
}

export default newUserSaga;
