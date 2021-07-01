import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {logout} from '../../store/api-actions';
import {AuthorizationStatus} from '../../const';


function Profile({isAuthUser, logoutClick}) {
  const logoutClickHandler = (evt) => {
    evt.preventDefault();
    logoutClick();
  };

  return isAuthUser
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

Profile.propTypes  = {
  isAuthUser: PropTypes.bool.isRequired,
  logoutClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    isAuthUser: state.user.authorizationStatus === AuthorizationStatus.AUTH,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logoutClick() {
      dispatch(logout());
    },
  };
};

export {Profile};
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
