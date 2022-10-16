import store from '../../../store';
import {USER_ACTIONS} from '../../types';

const {dispatch} = store;

export const SET_USER = payload =>
  dispatch({
    type: USER_ACTIONS.SET_USER,
    payload,
  });
