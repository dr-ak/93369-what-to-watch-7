import React from 'react';
import PropTypes from 'prop-types';

import Comment from '../comment/comment';
import CommentProp from '../comment/comment.prop';

function FilmReviews({comments}) {
  const rowCount = Math.floor(comments.length / 2);
  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li className="film-nav__item">
            <a href="#" className="film-nav__link">Overview</a>
          </li>
          <li className="film-nav__item">
            <a href="#" className="film-nav__link">Details</a>
          </li>
          <li className="film-nav__item film-nav__item--active">
            <a href="#" className="film-nav__link">Reviews</a>
          </li>
        </ul>
      </nav>
      <div className="film-card__reviews film-card__row">
        <div className="film-card__reviews-col">
          {comments.slice(0, rowCount + 1).map((comment) => (
            <Comment key={comment.id} comment={comment} />
          ))}
        </div>
        <div className="film-card__reviews-col">
          {comments.slice(rowCount + 1).map((comment) => (
            <Comment key={comment.id} comment={comment} />
          ))}
        </div>
      </div>
    </div>

  );
}

FilmReviews.propTypes = {
  comments: PropTypes.arrayOf(CommentProp),
};

export default FilmReviews;
