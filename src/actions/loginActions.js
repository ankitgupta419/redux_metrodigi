import * as types from './actionTypes';
import UsersApi from '../api/loginUsers';

export const getUserSuccess = (user) => ({type: types.GET_USER_SUCCESS, user});
export const loadUsersSuccess = (userData) => ({type: types.LOAD_USERDATA_SUCCESS, userData});
export function loadUsers() {
  return function(dispatch) {
    return UsersApi.getAllLoginData().then(userData => {
      dispatch(loadUsersSuccess(userData));
    }).catch(error => {
      throw(error);
    });
  };
}