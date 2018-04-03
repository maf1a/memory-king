import { combineReducers } from 'redux';
import newUserReducer from './new-user-reducer';
import loginFormReducer from './login-reducer';
import userReducer from './user-reducer';

export default combineReducers({
  newUserReducer,
  loginFormReducer,
  userReducer
});
