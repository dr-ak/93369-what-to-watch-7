import {ALL_GENRES} from './const';

export const getFilteredFilms = (films, genre) => {
  if (genre === ALL_GENRES) {
    return films;
  }

  return films.filter((film) => film.genre === genre);
};
