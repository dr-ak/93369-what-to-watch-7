import React, {useRef} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {login} from '../../store/api-actions';

import Footer from '../footer/footer';
import {AppRoute} from '../../const';

function Login({onSubmit, backPath}) {
  const emailRef = useRef();
  const passwordRef = useRef();

  const history = useHistory();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSubmit({
      login: emailRef.current.value,
      password: passwordRef.current.value,
    });
    history.push(AppRoute.MAIN_PAGE);
  };

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <Link className="logo__link" to="/">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>
        <h1 className="page-title user-page__title">Sign in</h1>
      </header>
      <div className="sign-in user-page__content">
        <form action="" className="sign-in__form">
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input ref={emailRef} className="sign-in__input" type="email" placeholder="Email address" name="user-email" id="user-email" autoComplete="off"/>
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input ref={passwordRef} className="sign-in__input" type="password" placeholder="Password" name="user-password" id="user-password" autoComplete="off"/>
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit"
              onClick={handleSubmit}
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>

  );
}

Login.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  backPath: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => {
  return {
    backPath: state.user.backPath,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit(authData) {
      dispatch(login(authData));
    },
  };
};

export {Login};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
