import expo from 'expo';
import { USER_LOGGED_IN } from '../actions/types';

const INITIAL_STATE = {
  id: '',
  name: '',
  token: '',
  picture: '',
  level: '',
  guessed_words: '',
  total_words: '',
  errors: [],
  errorsShow: false,
};

const userReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch(type) {
    case USER_LOGGED_IN:

      const store = expo.SecureStore;
      store.setItemAsync('id', payload.id);
      const item = store.getItemAsync('id');
      console.log(item);
      
      return {...state, payload };
    default:
      return state;
  }
}

export default userReducer;
