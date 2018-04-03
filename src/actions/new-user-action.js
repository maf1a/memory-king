import * as EmailValidator from 'email-validator';
import store from '../store';
import thunk from 'redux-thunk';
import { NEW_USER_FORM_CHANGED, NAME_CHANGED, EMAIL_CHANGED,
  PASSWORDS_CHANGED, FORM_SUBMITTED, FORM_SUBMIT_ERROR, FETCHED_ERRORS } from './types';

export const onFormChamge = (input, value) => {
  return (dispatch) => {
    if (input == 'name') {
      value = value.length > 0 ? value.match(/[A-z0-9А-я]/g).join('').substr(0, 15) : value;
      dispatch({ type: NAME_CHANGED, payload: { value } });
    };

    if (input == 'email') {
      value = value.length > 0 ? value.match(/[A-z0-9@.-_]/g).join('').substr(0, 40) : value;
      dispatch({type: EMAIL_CHANGED, payload: { value } });
    };

    if (input == 'password' || input == 'password2') {
      dispatch({ type: PASSWORDS_CHANGED, payload: { input, value } });
    };

    const user = store.getState().newUserReducer;
    dispatch(fetchErrors(user));
  };
};

export const onFormSubmit = (user) => {
  return (dispatch) => {
    dispatch(fetchErrors(user));
    dispatch({ type: FORM_SUBMIT_ERROR });

    if (store.getState().newUserReducer.errors.length === 0)
      dispatch({ type: FORM_SUBMITTED, payload: user });
  }
}

export const fetchErrors = (user) => {
  return (dispatch) => {
    const { email, password, password2, name } = user;
    var errors = [];

    console.log(email, password, password2, name);

    if (!email || !password || !password2 || !name) {
      errors = [...errors, "All fields required"];
      return ({ type: FETCHED_ERRORS, payload: errors });
    }
    if (!EmailValidator.validate(email))
      errors = [...errors, "Email is not valid"];
    if (password.length <= 5)
      errors = [...errors, "Password is too short"];
    if (password != password2 && password.length > 5)
      errors = [...errors, "Passwords don't match"];
    if (name.length <= 2)
      errors = [...errors, "Name is too short"];

    dispatch({ type: FETCHED_ERRORS, payload: errors });
  }
};
