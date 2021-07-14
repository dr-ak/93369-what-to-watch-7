import React from 'react';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';

import {logout} from '../../store/api-actions';
import {AuthorizationStatus} from '../../const';
import {getAuthorizationStatus} from '../../store/selectors/user';


function Profile() {
  const dispatch = useDispatch();

  const authorizationStatus = useSelector(getAuthorizationStatus);

  const logoutClickHandler = (evt) => {
    evt.preventDefault();
    dispatch(logout());
  };

  return authorizationStatus === AuthorizationStatus.AUTH
    ? (
      <ul className="user-block">
        <li className="user-block__item">
          <div className="user-block__avatar">
            <img src="img/avatar.jpg" alt="User avatar" width={63} height={63} />
          </div>
        </li>
        <li className="user-block__item">
          <Link className="user-block__link" to="/" onClick={logoutClickHandler}>Sign out</Link>
        </li>
      </ul>
    )
    : (
      <div className="user-block">
        <Link className="user-block__link" to="/login">Sign in</Link>
      </div>
    );
}

export default Profile;
