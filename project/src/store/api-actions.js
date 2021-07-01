import {ActionCreator as MainPageActionCreator} from './actions/main-page';
import {ActionCreator as UserActionCreator} from './actions/user';
import {AuthorizationStatus, APIRoute} from '../const';
import {adaptFilmToClient} from '../adapters';

export const fetchFilms = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FILMS)
    .then(({data}) => dispatch(MainPageActionCreator.loadFilms(data.map((film) => adaptFilmToClient(film)))))
);

export const fetchPromoFilm = () => (dispatch, _getState, api) => (
  api.get(APIRoute.PROMO_FILM)
    .then(({data}) => dispatch(MainPageActionCreator.loadPromoFilm(adaptFilmToClient(data))))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(() => dispatch(UserActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(({data}) => localStorage.setItem('token', data.token))
    .then(() => dispatch(UserActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
);

export const logout = () => (dispatch, _getState, api) => (
  api.delete(APIRoute.LOGOUT)
    .then(() => localStorage.removeItem('token'))
    .then(() => dispatch(UserActionCreator.logout()))
);
