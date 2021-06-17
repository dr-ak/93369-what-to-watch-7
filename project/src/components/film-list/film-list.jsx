import React from 'react';
import PropTypes from 'prop-types';

import FilmProp from '../film/film.prop';
import SmallFilmCard from '../small-film-card/small-film-card';

function FilmList({films}) {
  return (
    <div className="catalog__films-list">
      {films.map((film) =>(
        <SmallFilmCard
          key={film.id}
          film={film}
        />))}
    </div>
  );
}

FilmList.propTypes  = {
  films: PropTypes.arrayOf(FilmProp),
};

export default FilmList;
