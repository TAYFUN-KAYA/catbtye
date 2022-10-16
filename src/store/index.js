import {createStore} from 'redux';
import reducers from './reducers';

const STORE = createStore(reducers, {
  users: [],
});

export default STORE;
