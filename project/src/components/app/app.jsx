import React from 'react';
import {Switch, Route, Router} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import browserHistory from '../../browser-history';

import Loading from '../loading/loading';
import MainPage from '../main-page/main-page';
import Login from '../login/login';
import MyList from '../mylist/mylist';
import Film from '../film/film';
import FilmAddReview from '../film-add-review/film-add-review';
import Player from '../player/player';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';
import {fetchFilm, fetchSimilarFilms, fetchComments} from '../../store/api-actions';
import {getLoadDataStatus as getLoadDataFilmStatus, getNotFoundPageStatus} from '../../store/selectors/film';
import {getLoadDataStatus} from '../../store/selectors/main-page';

import {AppRoute} from '../../const';
import {getFilm, getMyList} from '../../mocks/films';

function App() {
  const dispatch = useDispatch();

  const isDataLoaded = useSelector(getLoadDataStatus);
  const isNotFoundPage = useSelector(getNotFoundPageStatus);
  const isFilmDataLoaded = useSelector(getLoadDataFilmStatus);

  if (!isDataLoaded) {
    return <Loading />;
  }

  return (
    <Router history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.MAIN_PAGE}>
          <MainPage />
        </Route>
        <Route exact path={AppRoute.LOGIN}>
          <Login />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.MY_LIST}
          render={() => (
            <MyList films={getMyList()} />
          )}
        />
        <Route exact path={AppRoute.FILM} render={(data) => {
          const filmId = data.match.params.id;

          dispatch(fetchFilm(filmId));
          dispatch(fetchSimilarFilms(filmId));
          dispatch(fetchComments(filmId));

          if (isNotFoundPage) {
            return <NotFoundScreen />;
          }

          if (!isFilmDataLoaded) {
            return <Loading />;
          }

          return <Film />;
        }}
        />
        <PrivateRoute exact path={AppRoute.FILM_REVIEW} render={(data) => {
          const filmId = data.match.params.id;
          dispatch(fetchFilm(filmId));

          return <FilmAddReview/>;
        }}
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
    </Router>
  );
}

export default App;
