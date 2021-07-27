import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import {AuthorizationStatus, AppRoute, ALL_GENRES} from '../../const';
import App from './app';

const FILM_FIRST = {
  'backgroundColor': '#D6CDAF',
  'backgroundImage': 'https://7.react.pages.academy/static/film/background/Aviator.jpg',
  'description': 'A biopic depicting the early years of legendary Director and aviator Howard Hughes\' career from the late 1920s to the mid 1940s.',
  'director': 'Martin Scorsese',
  'genre': 'Drama',
  'id': 2,
  'isFavorite': false,
  'name': 'Aviator',
  'posterImage': 'https://7.react.pages.academy/static/film/poster/Aviator.jpg',
  'previewImage': 'https://7.react.pages.academy/static/film/preview/aviator.jpg',
  'previewVideoLink': 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
  'rating': 9.8,
  'released': 2014,
  'runTime': 170,
  'scoresCount': 307174,
  'starring': [
    'Leonardo DiCaprio',
    'Cate Blanchett',
    'Kate Beckinsale',
  ],
  'videoLink': 'http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4',
};

const FILM_SECOND = {
  'backgroundColor': '#B9B27E',
  'backgroundImage': 'https://7.react.pages.academy/static/film/background/matrix.jpg',
  'description': 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
  'director': 'Wachowski Brothers',
  'genre': 'Action',
  'id': 7,
  'isFavorite': false,
  'name': 'Matrix',
  'posterImage': 'https://7.react.pages.academy/static/film/poster/matrix.jpg',
  'previewImage': 'https://7.react.pages.academy/static/film/preview/matrix.jpg',
  'previewVideoLink': 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
  'rating': 4.4,
  'released': 1999,
  'runTime': 136,
  'scoresCount': 1503092,
  'starring': [
    'Keanu Reeves',
    'Laurence Fishburne',
    'Carrie-Anne Moss',
  ],
  'videoLink': 'http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4',
};

const COMMENTS = [
  {
    id: 15,
    userId: 14,
    userName: 'Corey',
    rating: 8.3,
    text: 'The editing is a mess, and the transitions of the plot or characters are rather strange. There is no narrative focus and the storytelling is unbalanced. I cannot really understand why such a bad movie received an overwhelming approval from the critics.',
    date: '2021-05-15T09:55:44.868Z',
  },
  {
    id: 16,
    userId: 15,
    userName: 'Jack',
    rating: 5.3,
    text: 'A movie that will take you to another world full of emotions.',
    date: '2021-05-15T09:55:44.868Z',
  },
];

let history = null;
let store = null;
let fakeApp = null;

describe('Application Routing', () => {
  beforeAll(() => {
    history = createMemoryHistory();

    const createFakeStore = configureStore({});
    store = createFakeStore({
      USER: {
        authorizationStatus: AuthorizationStatus.AUTH,
      },
      MAIN_PAGE: {
        genre: ALL_GENRES,
        promoFilm: FILM_FIRST,
        allFilms: [FILM_FIRST, FILM_SECOND],
        films: [FILM_FIRST, FILM_SECOND],
        isShowButton: false,
        isDataLoaded: true,
      },
      FILM: {
        film: FILM_FIRST,
        similarFilms: [FILM_FIRST, FILM_SECOND],
        comments: COMMENTS,
        isDataLoaded: true,
        isNotFoundPage: false,
      },
      FORM: {
        isDisabledFields: false,
        isDisabledSubmit: true,
        rating: 8,
        text: '',
        isSubmitError: false,
      },
      MY_LIST: {
        myList: [FILM_FIRST, FILM_SECOND],
        isDataLoaded: false,
      },
    });

    fakeApp = (
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>
    );
  });

  it('should render "Login" when user navigate to "/login"', () => {
    history.push(AppRoute.LOGIN);
    render(fakeApp);

    expect(screen.getByText('Sign in', {selector: 'h1'})).toBeInTheDocument();
    expect(screen.getByLabelText(/Email address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
  });

  it('should render "MainPage" when user navigates to "/"', () => {
    history.push(AppRoute.MAIN_PAGE);
    render(fakeApp);

    expect(screen.getByText(FILM_FIRST.name, {selector: 'h2'})).toBeInTheDocument();
    expect(screen.getByText(ALL_GENRES)).toBeInTheDocument();
  });

  it('should render "Film" when user navigates to "/films/:id"', () => {
    history.push(AppRoute.FILM.replace(':id', FILM_FIRST.id));
    render(fakeApp);

    expect(screen.getByText(FILM_FIRST.name, {selector: 'h2'})).toBeInTheDocument();
    expect(screen.getByText('Overview')).toBeInTheDocument();
    expect(screen.getByText('Details')).toBeInTheDocument();
    expect(screen.getByText('Reviews')).toBeInTheDocument();
  });

  it('should render "MyList" when user navigates to "/mylist"', () => {
    history.push(AppRoute.MY_LIST);
    render(fakeApp);

    expect(screen.getByText(/My list/i)).toBeInTheDocument();
  });

  it('should render "FilmAddReview" when user navigates to "/mylist"', () => {
    history.push(AppRoute.FILM_REVIEW.replace(':id', FILM_FIRST.id));
    render(fakeApp);

    expect(screen.getByText(FILM_FIRST.name, {selector: 'a'})).toBeInTheDocument();
    expect(screen.getByLabelText('Rating 1')).toBeInTheDocument();
  });

  it('should render "Player" when user navigates to "/player/:id"', () => {
    history.push(AppRoute.PLAYER.replace(':id', FILM_FIRST.id));
    render(fakeApp);

    expect(screen.getByText('Transpotting', {selector: 'div'})).toBeInTheDocument();
    expect(screen.getByText('Exit', {selector: 'button'})).toBeInTheDocument();
  });

  it('should render "AddReviewScreen" when user navigates to "/films/:id/review"', () => {
    history.push(AppRoute.FILM_REVIEW.replace(':id', FILM_FIRST.id));
    render(fakeApp);

    expect(screen.getByText(FILM_FIRST.name, {selector: 'a'})).toBeInTheDocument();
    expect(screen.getByText('Add review', {selector: 'a'})).toBeInTheDocument();
    expect(screen.getByLabelText('Rating 1', { exact: true})).toBeInTheDocument();
  });

  it('should render "NotFoundScreen" when user navigates to non-existent route', () => {
    history.push('/not-found-page');
    render(fakeApp);

    expect(screen.getByText('404. Page not found')).toBeInTheDocument();
  });
});
