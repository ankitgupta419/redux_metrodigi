import * as types from '../actions/actionTypes';

export default function userLoginReducer(state = [], action) {
  switch (action.type) {
  case types.LOAD_USERDATA_SUCCESS:
    return action.userData
  default:
    return state;
  }
}