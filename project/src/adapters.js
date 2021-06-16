export const adaptFilmToClient = (film) => {
  return {
    id: film.id,
    name: film.name,
    posterImage: film.poster_image,
    previewImage: film.preview_image,
    backgroundImage: film.background_image,
    backgroundColor: film.background_color,
    videoLink: film.video_link,
    previewVideoLink: film.preview_video_link,
    description: film.description,
    rating: film.rating,
    scoresCount: film.scores_count,
    director: film.director,
    starring: film.starring,
    runTime: film.run_time,
    genre: film.genre,
    released: film.released,
    isFavorite: film.is_favorite,
  };
};

export const adaptCommentToClient = (comment) => {
  return {
    id: comment.id,
    userId: comment.user.id,
    userName: comment.user.name,
    rating: comment.rating,
    comment: comment.comment,
    date: comment.date,
  };
};

export const adaptUserToClient = (user) => {
  return {
    id: user.id,
    email: user.email,
    name: user.name,
    avatarUrl: user.avatar_url,
    token: user.token,
  };
};

