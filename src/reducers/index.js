import {combineReducers} from 'redux';
import comments from './commentsReducer';
import commentEditBox from './commentEditBoxReducer';
import sideBar from './sideBarReducer';
import sideBarById from './sideBarByIdReducer';

const rootReducer = combineReducers({
  comments,
  commentEditBox,
  sideBar,
  sideBarById
});

export default rootReducer;
