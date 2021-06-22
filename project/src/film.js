import {getFilms} from './mocks/films';

export const getFilteredFilms = (genre) => getFilms().filter((film) => film.genre === genre);
