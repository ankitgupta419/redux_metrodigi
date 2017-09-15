import * as types from './actionTypes';
import CommentsApi from '../api/comments';

export const loadCommentsSuccess = (commentsData) => ({type: types.LOAD_COMMENT_SUCCESS, commentsData});
export const createCommentSuccess = (comment) => ({type: types.CREATE_COMMENT_SUCCESS, comment});
export const editCommentSuccess = (comment) => ({type: types.EDIT_COMMENT_SUCCESS, comment});
export const deleteCommentSuccess = (id) => ({type: types.DELETE_COMMENT_SUCCESS, id});
export const changeResponseSuccess = (comment) => ({type: types.CHANGE_COMMENT_RESPONSE_SUCCESS, comment});

export function loadComments() {
  return function(dispatch) {
    return CommentsApi.getAllCommentsData().then(commentsData => {
      dispatch(loadCommentsSuccess(commentsData));
    }).catch(error => {
      throw(error);
    });
  };
}


export function createComment(comment) {
  return function (dispatch) {
    return CommentsApi.createComment(comment).then(comment => {
      dispatch(createCommentSuccess(comment));
      return comment;
    }).catch(error => {
      throw(error);
    });
  };
}
export function editComment(comment) {
  return function (dispatch) {
    return CommentsApi.editComment(comment).then(response => {
      dispatch(editCommentSuccess(response));
      return response;
    }).catch(error => {
      throw(error);
    });
  };
}
export function saveUserReply(reply,commentId) {
  return function(dispatch) {
    return CommentsApi.saveUserReply(reply,commentId)
     
  };
}
export function deleteUserComment(deleteId,createdUser) {
 
  return function (dispatch) {
    return CommentsApi.deleteUserComment(deleteId,createdUser).then(id => {
      dispatch(deleteCommentSuccess(id));
      return id;
    }).catch(error => {
      throw(error);
    });
  };
}

export function changeCommentStatus(ticketStatus,commentId) {
  return function(dispatch) {
    return CommentsApi.changeCommentStatus(ticketStatus,commentId).then((response) => {
      dispatch(changeResponseSuccess(response));
      // return response;
    }).catch(error => {
      throw(error);
    });
    
     
  };
}
// export const changeCommentStatus = (ticketStatus,commentId) => ({type: types.CHANGE_COMMENT_RESPONSE_SUCCESS, ticketStatus,commentId});
