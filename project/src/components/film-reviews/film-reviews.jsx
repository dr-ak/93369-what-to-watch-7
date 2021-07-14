import React from 'react';
import PropTypes from 'prop-types';

import Comment from '../comment/comment';
import CommentProp from '../comment/comment.prop';


function FilmReviews({comments}) {

  const showCommentsColumn = (columnComments) => (
    <div className="film-card__reviews-col">
      {columnComments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );

  const rowCount = Math.ceil(comments.length / 2);

  return (
    <div className="film-card__reviews film-card__row">
      {showCommentsColumn(comments.slice(0, rowCount))}
      {showCommentsColumn(comments.slice(rowCount))}
    </div>
  );
}

FilmReviews.propTypes = {
  comments: PropTypes.arrayOf(CommentProp),
};

export default FilmReviews;
