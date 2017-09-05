import * as types from '../actions/actionTypes';
import initialState from './initialState';
export default function sideBarByIdReducer(state = initialState.elementDesc, action) {
  switch (action.type) {
	  case types.SIDEBAR_BY_ID:
	    	var elementSum={
			  	id:action.id,
  				position:action.position
			 }
    	return Object.assign({}, elementSum)  
	  default:
	    return state;
  }
}