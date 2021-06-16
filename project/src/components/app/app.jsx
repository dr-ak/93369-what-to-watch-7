import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';

import MainPage from '../main-page/main-page';
import Login from '../login/login';
import MyList from '../mylist/mylist';
import Film from '../film/film';
import FilmAddReview from '../film-add-review/film-add-review';
import Player from '../player/player';
import NotFoundScreen from '../not-found-screen/not-found-screen';

import {AppRoute} from '../../const';
import {getFilm, getSimilarFilms, getMyList} from '../../mocks/films';
import {getComments} from '../../mocks/comments';

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
          <MyList films={getMyList()} />
        </Route>
        <Route exact path={AppRoute.FILM} render={(data) => (
          <Film
            film={getFilm(data.match.params.id)}
            similarFilms={getSimilarFilms(data.match.params.id)}
            comments={getComments(data.match.params.id)}
          />)}
        />
        <Route exact path={AppRoute.FILM_REVIEW} render={(data) => (
          <FilmAddReview
            film={getFilm(data.match.params.id)}
          />)}
        />
        <Route exact path={AppRoute.PLAYER} render={(data) => (
          <Player
            film={getFilm(data.match.params.id)}
          />)}
        />
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
