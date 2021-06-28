export const ALL_GENRES = 'All genres';
export const FILM_COUNT = 8;
export const TAG_A_NAME = 'A';

export const AppRoute = {
  MAIN_PAGE: '/',
  LOGIN: '/login',
  MY_LIST: '/mylist',
  FILM: '/films/:id',
  FILM_REVIEW: '/films/:id/review',
  PLAYER: '/player/:id',
};

export const AuthorizationStatus = {
  AUTH: 'AUTH',
  NO_AUTH: 'NO_AUTH',
  UNKNOWN: 'UNKNOWN',
};

export const APIRoute = {
  FILMS: '/films',
  FILM: '/films/:id',
  SIMILAR_FILMS: '/films/:id/similar',
  PROMO_FILM: '/promo',
  FAVORITE_FILMS: '/favorite',
  CHANGE_STATUS_FILM: '/favorite/:film_id/:status',
  COMMENTS: '/comments/:film_id',
  LOGIN: '/login',
  LOGOUT: '/logout',
};
