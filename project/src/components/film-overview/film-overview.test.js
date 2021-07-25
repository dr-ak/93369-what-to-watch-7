import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import FilmOverview from './film-overview';

const FILM = {
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

describe('Film overview component', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <FilmOverview film={FILM}/>
      </Router>,
    );

    expect(screen.getByText(FILM.rating)).toBeInTheDocument();
    expect(screen.getByText(FILM.description)).toBeInTheDocument();
  });

});
