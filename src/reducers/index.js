import {combineReducers} from 'redux';
import comments from './commentsReducer';
import commentEditBox from './commentEditBoxReducer';
import sideBar from './sideBarReducer';
import sideBarById from './sideBarByIdReducer';
import profileBar from './profileBarReducer';
import userLogin from './userLoginReducer';
import getUser from './getUserReducer';
const rootReducer = combineReducers({
  comments,
  commentEditBox,
  sideBar,
  sideBarById,
  profileBar,
  userLogin,
  getUser
});

export default rootReducer;
