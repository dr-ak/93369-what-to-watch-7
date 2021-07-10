import React from 'react';
import {Switch, Route, Router} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
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

import {AppRoute} from '../../const';
import {getFilm, getMyList} from '../../mocks/films';

function App({isNotFoundPage, isDataLoaded, isFilmDataLoaded, loadFilm, loadSimilarFilms, loadComments}) {
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
          loadFilm(filmId);
          loadSimilarFilms(filmId);
          loadComments(filmId);

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
          loadFilm(filmId);

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

App.propTypes  = {
  isDataLoaded: PropTypes.bool,
  isFilmDataLoaded: PropTypes.bool,
  loadFilm: PropTypes.func.isRequired,
  loadSimilarFilms: PropTypes.func.isRequired,
  loadComments: PropTypes.func.isRequired,
  isNotFoundPage: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  return {
    isDataLoaded: state.mainPage.isDataLoaded,
    isFilmDataLoaded: state.film.isDataLoaded,
    isNotFoundPage: state.film.isNotFoundPage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadFilm(filmId) {
      dispatch(fetchFilm(filmId));
    },
    loadSimilarFilms(filmId) {
      dispatch(fetchSimilarFilms(filmId));
    },
    loadComments(filmId) {
      dispatch(fetchComments(filmId));
    },
  };
};

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
