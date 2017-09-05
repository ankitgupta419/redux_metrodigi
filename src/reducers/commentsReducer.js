import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function commentsReducer(state = initialState.commentsData, action) {
  switch(action.type) {
    case types.LOAD_COMMENT_SUCCESS:
      return action.commentsData;
    case types.CREATE_COMMENT_SUCCESS:
      return [
        ...state,
        action.comment
      ]
  	case types.EDIT_COMMENT_SUCCESS:
  	   // console.log("edit Success",action.comment)
       return [
        ...state.filter(comment => comment.id !== action.comment.id),
        Object.assign({}, action.comment)
      ];
    
    case types.DELETE_COMMENT_SUCCESS:
      return state.filter(comment =>comment.id !== action.id)
    // case types.CHANGE_COMMENT_RESPONSE_SUCCESS:
      
    //    return [
    //       ...state.map(commentData =>
    //         commentData.id === action.commentId ? ( {...commentData,commentData['status']: action.ticketStatus} ) :commentData
    //       )
    //    ]
    default:
      return state;
  }
}