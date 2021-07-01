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

import {AppRoute} from '../../const';
import {getFilm, getSimilarFilms, getMyList} from '../../mocks/films';
import {getComments} from '../../mocks/comments';

function App({isDataLoaded}) {
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
        <Route exact path={AppRoute.FILM} render={(data) => (
          <Film
            film={getFilm(data.match.params.id)}
            films={getSimilarFilms(data.match.params.id)}
            comments={getComments(data.match.params.id)}
          />)}
        />
        <PrivateRoute
          exact
          path={AppRoute.FILM_REVIEW}
          render={(data) => (
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
    </Router>
  );
}

App.propTypes  = {
  isDataLoaded: PropTypes.bool,
};

const mapStateToProps = (state) => {
  return {
    isDataLoaded: state.mainPage.isDataLoaded,
  };
};

export {App};
export default connect(mapStateToProps)(App);
