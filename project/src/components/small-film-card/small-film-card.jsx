import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import {AppRoute} from '../../const';
import FilmProp from '../film/film.prop';

function SmallFilmCard({film}) {
  const[mouseOverFilm, setMouseOverFilm] = useState(null);
  const onMouseOverHandler = () => setMouseOverFilm(film);
  const onMouseOutHandler = () => setMouseOverFilm(null);

  return (
    <article className="small-film-card catalog__films-card"
      onMouseOver={onMouseOverHandler}
      onMouseOut={onMouseOutHandler}
    >
      <div className="small-film-card__image">
        <img src={film.previewImage} alt={film.name} width={280} height={175} />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={AppRoute.FILM.replace(':id', film.id)}>{film.name}</Link>
      </h3>
    </article>
  );
}

SmallFilmCard.propTypes  = {
  film: FilmProp,
};

export default SmallFilmCard;
