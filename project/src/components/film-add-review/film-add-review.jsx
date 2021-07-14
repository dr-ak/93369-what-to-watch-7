import React from 'react';
import {useSelector} from 'react-redux';

import Header from '../header/header';
import Form from '../form/form';
import {getFilm} from '../../store/selectors/film';

function FilmAddReview() {
  const film = useSelector(getFilm);

  const {backgroundImage, name, posterImage} = film;

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={backgroundImage} alt={name} />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <Header filmName={name} />
        <div className="film-card__poster film-card__poster--small">
          <img src={posterImage} alt={`${name} poster`} width={218} height={327} />
        </div>
      </div>
      <div className="add-review">
        <Form />
      </div>
    </section>
  );
}

export default FilmAddReview;
