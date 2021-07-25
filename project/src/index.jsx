import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-router-dom';
import {configureStore} from '@reduxjs/toolkit';
import {createAPI} from './services/api';
import {Provider} from 'react-redux';
import {redirect} from './store/middlewares/redirect';

import browserHistory from './browser-history';
import App from './components/app/app';
import {requireAuthorization} from './store/actions/user';
import reducer from './store/reducers/index';
import {AuthorizationStatus} from './const';
import {checkAuth, fetchFilms, fetchPromoFilm} from './store/api-actions';

const api = createAPI(
  () => store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH)),
);

const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(redirect),
});

store.dispatch(checkAuth());
store.dispatch(fetchPromoFilm());
store.dispatch(fetchFilms());

ReactDOM.render(
  <React.StrictMode>
    <Router history={browserHistory}>
      <Provider store={store}>
        <App/>
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'));
