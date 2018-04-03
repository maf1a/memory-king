import * as EmailValidator from 'email-validator';
import store from '../store';
import thunk from 'redux-thunk';
import { LOGIN_FORM_CHANGE, LOGIN_FETCH_ERRORS,
  LOGIN_FORM_SUBMITTED, LOGIN_FORM_SUBMIT_ERROR } from './types';

export const onLoginFormChange = (input, value) => {
  return (dispatch) => {
    if (input == 'email')
      value = value.length > 0 ? value.match(/[A-z0-9@.-_]/g).join('').substr(0, 40) : value;
    dispatch({ type: LOGIN_FORM_CHANGE, payload: { input, value } });

    const user = store.getState().loginFormReducer;
    dispatch(fetchErrors(user));
  }
};

export const onFormSubmit = (user) => {
  return (dispatch) => {
    dispatch(fetchErrors(user));
    dispatch({ type: LOGIN_FORM_SUBMIT_ERROR });

    if (store.getState().loginFormReducer.errors.length === 0)
      dispatch({ type: LOGIN_FORM_SUBMITTED, payload: user });
  }
}

export const fetchErrors = (user) => {
  return (dispatch) => {
    const { email, password } = user;
    var errors = [];

    if (!email || !password) {
      errors = [...errors, "All fields required"];
      return ({ type: LOGIN_FETCH_ERRORS, payload: errors });
    }
    if (!EmailValidator.validate(email))
      errors = [...errors, "Email is not valid"];
    if (password.length <= 5)
      errors = [...errors, "Password is too short"];

    dispatch({ type: LOGIN_FETCH_ERRORS, payload: errors });
  }
};
