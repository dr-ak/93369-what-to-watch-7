import {ActionCreator} from './action';
import {APIRoute} from '../const';
import {adaptFilmToClient} from '../adapters';

export const fetchFilms = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FILMS)
    .then(({data}) => dispatch(ActionCreator.loadFilms(data.map((film) => adaptFilmToClient(film)))))
);

export const fetchPromoFilm = () => (dispatch, _getState, api) => (
  api.get(APIRoute.PROMO_FILM)
    .then(({data}) => dispatch(ActionCreator.loadPromoFilm(adaptFilmToClient(data))))
);
