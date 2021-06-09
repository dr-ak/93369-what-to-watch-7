import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app/app';
import {Film} from './components/types';

const film: Film = {
  name: 'The Grand Budapest Hotel',
  released: 2014,
  genre: 'Drama',
};

ReactDOM.render(
  <React.StrictMode>
    <App {...film}/>
  </React.StrictMode>,
  document.getElementById('root'));
