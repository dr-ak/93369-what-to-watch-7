import React from 'react';
import PropTypes from 'prop-types';

import FilmProp from '../film/film.prop';
import Header from '../header/header';
import SmallFilmCard from '../small-film-card/small-film-card';
import Footer from '../footer/footer';

function MyList({films}) {
  return (
    <div className="user-page">
      <Header />
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <div className="catalog__films-list">
          {films.map((similarFilm) =>(
            <SmallFilmCard
              key={similarFilm.id}
              film={similarFilm}
            />))}
        </div>
      </section>
      <Footer />
    </div>
  );
}

MyList.propTypes  = {
  films: PropTypes.arrayOf(FilmProp),
};

export default MyList;
