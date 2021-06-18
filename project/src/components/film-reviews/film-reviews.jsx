import React from 'react';
import PropTypes from 'prop-types';

import Comment from '../comment/comment';
import CommentProp from '../comment/comment.prop';

function FilmReviews({comments}) {
  const rowCount = Math.floor(comments.length / 2);
  return (
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
  );
}

FilmReviews.propTypes = {
  comments: PropTypes.arrayOf(CommentProp),
};

export default FilmReviews;
