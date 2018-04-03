import { NEW_USER_FORM_CHANGED, EMAIL_CHANGED, NAME_CHANGED,
  PASSWORDS_CHANGED, FORM_SUBMIT_ERROR } from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  password2: '',
  name: '',
  errors: [],
  errorsShow: false,
};

const newUserReducer = (state = INITIAL_STATE, {type, payload}) => {
  switch (type) {
    case NEW_USER_FORM_CHANGED:
      return {...state, [payload.input]: payload.value };
    case EMAIL_CHANGED:
      return {...state, email: payload.value };
    case NAME_CHANGED:
      return {...state, name: payload.value };
    case PASSWORDS_CHANGED:
      return {...state, [payload.input]: payload.value };
    case 'FETCHED_ERRORS':
      return {...state, errors: payload };
    case FORM_SUBMIT_ERROR:
      return {...state, errorsShow: true };
    default:
      return state;
  }
};

export default newUserReducer;
