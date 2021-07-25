import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {useSelector} from 'react-redux';

import Loading from '../loading/loading';
import MainPage from '../main-page/main-page';
import Login from '../login/login';
import MyList from '../mylist/mylist';
import Film from '../film/film';
import FilmAddReview from '../film-add-review/film-add-review';
import Player from '../player/player';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';
import {getLoadDataStatus} from '../../store/selectors/main-page';
import {AppRoute} from '../../const';

function App() {

  const isDataLoaded = useSelector(getLoadDataStatus);

  if (!isDataLoaded) {
    return <Loading />;
  }

  return (
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
        render={() => <MyList />}
      />
      <Route exact path={AppRoute.FILM}>
        <Film />
      </Route>
      <PrivateRoute
        exact
        path={AppRoute.FILM_REVIEW}
        render={() => <FilmAddReview/>}
      />
      <Route exact path={AppRoute.PLAYER}>
        <Player/>
      </Route>
      <Route>
        <NotFoundScreen />
      </Route>
    </Switch>
  );
}

export default App;
