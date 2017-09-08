import * as types from '../actions/actionTypes';
import initialState from './initialState';
export default function getUserReducer(state = initialState.getUser, action) {
  switch (action.type) {
  case types.GET_USER_SUCCESS:
    return action.user
  default:
    return state;
  }
}