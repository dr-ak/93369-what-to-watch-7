import React from 'react';
import {Link} from 'react-router-dom';
// import Logo from '../logo/logo';

function NotFoundScreen() {
  return (
    <React.Fragment>
      <h1>404. Page not found</h1>
      <Link to="/">Вернуться на главную</Link>
    </React.Fragment>
  );
}

export default NotFoundScreen;
