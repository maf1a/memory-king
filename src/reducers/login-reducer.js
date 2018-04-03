import { LOGIN_FORM_CHANGE, LOGIN_FETCH_ERRORS, LOGIN_FORM_SUBMIT_ERROR } from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  errors: [],
  errorsShow: false,
};

const loginFormReducer = (state = INITIAL_STATE, { type, payload }) => {
  console.log(type, payload);
  switch (type) {
    case LOGIN_FORM_CHANGE:
      return { ...state, [payload.input]: payload.value }
    case LOGIN_FETCH_ERRORS:
      return { ...state, errors: payload }
    case LOGIN_FORM_SUBMIT_ERROR:
      return { ...state, errorsShow: true }
    default:
      return state;
  }
};

export default loginFormReducer;
