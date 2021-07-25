import myList from './my-list';
import {ActionType} from '../actions/my-list';

const FILM = {
  'name': 'Aviator',
  'poster_image': 'https://7.react.pages.academy/static/film/poster/Aviator.jpg',
  'preview_image': 'https://7.react.pages.academy/static/film/preview/aviator.jpg',
  'background_image': 'https://7.react.pages.academy/static/film/background/Aviator.jpg',
  'background_color': '#D6CDAF',
  'description': 'A biopic depicting the early years of legendary Director and aviator Howard Hughes\' career from the late 1920s to the mid 1940s.',
  'rating': 9.8,
  'scores_count': 307174,
  'director': 'Martin Scorsese',
  'starring': [
    'Leonardo DiCaprio',
    'Cate Blanchett',
    'Kate Beckinsale',
  ],
  'run_time': 170,
  'genre': 'Drama',
  'released': 2014,
  'id': 2,
  'is_favorite': false,
  'video_link': 'http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4',
  'preview_video_link': 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
};

describe('My list reducer', () => {
  it('without additional parameters should return initial state', () => {
    expect(myList(undefined, {}))
      .toEqual({
        myList: false,
      });
  });

  it('should load my list and isDataLoaded to true', () => {
    const state = {
      myList: false,
    };

    const requireAuthorizationAction = {
      type: ActionType.LOAD_MY_LIST,
      payload: [FILM, FILM],
    };

    expect(myList(state, requireAuthorizationAction))
      .toEqual({
        myList: [FILM, FILM],
      });
  });
});
