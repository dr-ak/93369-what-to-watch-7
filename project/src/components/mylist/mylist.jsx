import React from 'react';
import {useSelector} from 'react-redux';

import Header from '../header/header';
import FilmList from '../film-list/film-list';
import Footer from '../footer/footer';
import {getMyList} from '../../store/selectors/my-list';

function MyList() {
  const films = useSelector(getMyList);

  return (
    <div className="user-page">
      <Header />
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <FilmList films={films} />
      </section>
      <Footer />
    </div>
  );
}

export default MyList;
