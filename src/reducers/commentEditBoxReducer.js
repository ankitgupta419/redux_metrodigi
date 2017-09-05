import * as types from '../actions/actionTypes';
import initialState from './initialState';
export default function commentEditBoxReducer(state = initialState.commentBox, action) {
  switch (action.type) {
  case types.OPEN_COMMENT_EDITBOX:
    		var commentBox={
			  	showCommentBox:action.value,
			  	commentSummary:action.data
			 }
    return Object.assign({}, commentBox)
        
  default:
    return state;
  }
}

