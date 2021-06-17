import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app/app';
import {getFilms, getPromoFilm} from './mocks/films';

ReactDOM.render(
  <React.StrictMode>
    <App
      films = {getFilms()}
      promoFilm = {getPromoFilm()}
    />
  </React.StrictMode>,
  document.getElementById('root'));
