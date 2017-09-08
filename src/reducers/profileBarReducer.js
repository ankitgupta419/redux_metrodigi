import * as types from '../actions/actionTypes';

export default function profileBarReducer(state = false, action) {
  switch (action.type) {
  case types.TOGGLE_PROFILEBAR:
    return action.value
  default:
    return state;
  }
}