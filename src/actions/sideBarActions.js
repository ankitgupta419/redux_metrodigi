import * as types from './actionTypes';

export const showCommentEditBox = (value,data) => ({type: types.OPEN_COMMENT_EDITBOX, value,data});
export const showSideBar = (value) => ({type: types.TOGGLE_SIDEBAR, value});
export const showSideBarById = (id,position) => ({type: types.SIDEBAR_BY_ID, id,position});
export const showProfileBar = (value) => ({type: types.TOGGLE_PROFILEBAR, value});