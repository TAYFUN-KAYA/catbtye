import {combineReducers} from 'redux';
import reduceReducers from 'reduce-reducers';
import users from './users';

export default reduceReducers(
  combineReducers({
    users,
  }),
);
