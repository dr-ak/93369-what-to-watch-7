import {combineReducers} from 'redux';
import user from './user';
import film from './film';
import form from './form';
import  mainPage from './main-page';

export const NameSpace = {
  USER: 'USER',
  MAIN_PAGE: 'MAIN_PAGE',
  FILM: 'FILM',
  FORM: 'FORM',
};

export default combineReducers({
  [NameSpace.USER]: user,
  [NameSpace.MAIN_PAGE]: mainPage,
  [NameSpace.FILM]: film,
  [NameSpace.FORM]: form,
});
