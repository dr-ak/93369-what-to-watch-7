import {combineReducers} from 'redux';
import user from './user';
import  mainPage from './main-page';

export default combineReducers({
  user,
  mainPage,
});
