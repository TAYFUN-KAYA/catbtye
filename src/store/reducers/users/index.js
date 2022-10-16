import {USER_ACTIONS} from '../../types';

export default function userReducer(state = [], action) {
  switch (action.type) {
    case USER_ACTIONS.SET_USER: {
      const newState = [...action.payload];
      return newState;
    }
    default:
      return state;
  }
}
