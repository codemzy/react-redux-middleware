import { combineReducers } from 'redux';

// reducers
import usersReducer from './reducer_users';

const rootReducer = combineReducers({
  users: usersReducer
});

export default rootReducer;
