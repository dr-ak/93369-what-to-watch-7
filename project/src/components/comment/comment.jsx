import React from 'react';

import CommentProp from './comment.prop';
import {formatCommentDate, formatDateTime} from '../../utils/format-time';

function Comment({comment}) {
  const {text, userName, date, rating} = comment;
  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{text}</p>
        <footer className="review__details">
          <cite className="review__author">{userName}</cite>
          <time className="review__date" dateTime={formatDateTime(date)}>{formatCommentDate(date)}</time>
        </footer>
      </blockquote>
      <div className="review__rating">{rating}</div>
    </div>
  );
}

Comment.propTypes = {
  comment: CommentProp,
};

export default Comment;
