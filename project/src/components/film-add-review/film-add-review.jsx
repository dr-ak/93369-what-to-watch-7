import React from 'react';

import FilmProp from '../film/film.prop';
import Header from '../header/header';
import Form from '../form/form';

function FilmAddReview({film}) {
  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={film.backgroundImage} alt={film.name} />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <Header filmName={film.name} />
        <div className="film-card__poster film-card__poster--small">
          <img src={film.posterImage} alt={`${film.name} poster`} width={218} height={327} />
        </div>
      </div>
      <div className="add-review">
        <Form />
      </div>
    </section>
  );
}

FilmAddReview.propTypes  = {
  film: FilmProp,
};

export default FilmAddReview;
