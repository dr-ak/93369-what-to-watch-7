import {combineReducers} from 'redux';
import user from './user';
import film from './film';
import form from './form';
import  mainPage from './main-page';

export default combineReducers({
  user,
  mainPage,
  film,
  form,
});
