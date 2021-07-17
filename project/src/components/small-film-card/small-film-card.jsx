import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';

import {AppRoute} from '../../const';
import FilmProp from '../film/film.prop';
import SmallFilmCardPlayer from '../small-film-card-player/small-film-card-player';
import {redirectToRoute} from '../../store/actions/redirect';

function SmallFilmCard({film}) {
  const dispatch = useDispatch();

  const {id, name} = film;

  const[isActive, setIsActive] = useState(false);
  const onMouseOverHandler = () => setIsActive(true);
  const onMouseOutHandler = () => setIsActive(false);
  const onClickHandler = () => dispatch(redirectToRoute(AppRoute.FILM.replace(':id', id)));

  return (
    <article className="small-film-card catalog__films-card"
      onMouseOver={onMouseOverHandler}
      onMouseOut={onMouseOutHandler}
      onClick={onClickHandler}
    >
      <div className="small-film-card__image">
        <SmallFilmCardPlayer film={film} isActive={isActive} />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={AppRoute.FILM.replace(':id', id)}>{name}</Link>
      </h3>
    </article>
  );
}

SmallFilmCard.propTypes  = {
  film: FilmProp,
};

export default SmallFilmCard;
