import { combineReducers } from 'redux';
import { usersReducer } from '../pages/users/store/reducer';

export const rootReducer = combineReducers({
  userState:usersReducer,  
});
