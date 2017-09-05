import * as types from '../actions/actionTypes';

export default function sideBarReducer(state = false, action) {
  switch (action.type) {
  case types.TOGGLE_SIDEBAR:
    return action.value
        
    
  default:
    return state;
  }
}