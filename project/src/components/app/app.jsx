import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';

import MainPage from '../main-page/main-page';
import Login from '../login/login';
import MyList from '../mylist/mylist';
import Film from '../film/film';
import FilmReview from '../film-review/film-review';
import Player from '../player/player';
import NotFoundScreen from '../not-found-screen/not-found-screen';

import {AppRoute} from '../../const';

function App(props) {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.MAIN_PAGE}>
          <MainPage {...props} />
        </Route>
        <Route exact path={AppRoute.LOGIN}>
          <Login />
        </Route>
        <Route exact path={AppRoute.MY_LIST}>
          <MyList />
        </Route>
        <Route exact path={AppRoute.FILM}>
          <Film />
        </Route>
        <Route exact path={AppRoute.FILM_REVIEW}>
          <FilmReview />
        </Route>
        <Route exact path={AppRoute.PLAYER}>
          <Player />
        </Route>
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
