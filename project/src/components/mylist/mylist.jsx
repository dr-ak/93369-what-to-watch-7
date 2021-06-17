import React from 'react';

import Header from '../header/header';
import FilmList from '../film-list/film-list';
import Footer from '../footer/footer';

function MyList(props) {
  return (
    <div className="user-page">
      <Header />
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <FilmList {...props} />
      </section>
      <Footer />
    </div>
  );
}

export default MyList;
