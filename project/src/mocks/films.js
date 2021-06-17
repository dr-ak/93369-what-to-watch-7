import {adaptFilmToClient} from '../adapters';

const PROMO_FILM = 1;
const SIMILAR_FILMS_COUNT = 4;
const MY_LIST_COUNT = 6;

const films =  [
  {
    "name": "Macbeth",
    "poster_image": "https://7.react.pages.academy/static/film/poster/Macbeth.jpg",
    "preview_image": "https://7.react.pages.academy/static/film/preview/macbeth.jpg",
    "background_image": "https://7.react.pages.academy/static/film/background/Macbeth.jpg",
    "background_color": "#F1E9CE",
    "description": "Macbeth, the Thane of Glamis, receives a prophecy from a trio of witches that one day he will become King of Scotland. Consumed by ambition and spurred to action by his wife, Macbeth murders his king and takes the throne for himself.",
    "rating": 3.3,
    "scores_count": 48798,
    "director": "Justin Kurzel",
    "starring": [
      "Michael Fassbender",
      "Marion Cotillard",
      "Jack Madigan"
    ],
    "run_time": 113,
    "genre": "Drama",
    "released": 2015,
    "id": 1,
    "is_favorite": false,
    "video_link": "http://media.xiph.org/mango/tears_of_steel_1080p.webm",
    "preview_video_link": "https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm"
  },
  {
    "name": "Aviator",
    "poster_image": "https://7.react.pages.academy/static/film/poster/Aviator.jpg",
    "preview_image": "https://7.react.pages.academy/static/film/preview/aviator.jpg",
    "background_image": "https://7.react.pages.academy/static/film/background/Aviator.jpg",
    "background_color": "#D6CDAF",
    "description": "A biopic depicting the early years of legendary Director and aviator Howard Hughes' career from the late 1920s to the mid 1940s.",
    "rating": 9.8,
    "scores_count": 307174,
    "director": "Martin Scorsese",
    "starring": [
      "Leonardo DiCaprio",
      "Cate Blanchett",
      "Kate Beckinsale"
    ],
    "run_time": 170,
    "genre": "Drama",
    "released": 2014,
    "id": 2,
    "is_favorite": false,
    "video_link": "http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4",
    "preview_video_link": "https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm"
  },
  {
    "name": "War of the Worlds",
    "poster_image": "https://7.react.pages.academy/static/film/poster/War_of_the_Worlds.jpg",
    "preview_image": "https://7.react.pages.academy/static/film/preview/war-of-the-worlds.jpg",
    "background_image": "https://7.react.pages.academy/static/film/background/War_of_the_Worlds.jpg",
    "background_color": "#9B7E61",
    "description": "As Earth is invaded by alien tripod fighting machines, one family fights for survival.",
    "rating": 9.3,
    "scores_count": 386834,
    "director": "Steven Spielberg",
    "starring": [
      "Tom Cruise",
      "Dakota Fanning",
      "Tim Robbins"
    ],
    "run_time": 116,
    "genre": "Adventure",
    "released": 2005,
    "id": 3,
    "is_favorite": false,
    "video_link": "http://media.xiph.org/mango/tears_of_steel_1080p.webm",
    "preview_video_link": "https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4"
  },
  {
    "name": "Shutter Island",
    "poster_image": "https://7.react.pages.academy/static/film/poster/Shutter_Island.jpg",
    "preview_image": "https://7.react.pages.academy/static/film/preview/shutter-island.jpg",
    "background_image": "https://7.react.pages.academy/static/film/background/Shutter_Island.jpg",
    "background_color": "#977461",
    "description": "In 1954, a U.S. Marshal investigates the disappearance of a murderer, who escaped from a hospital for the criminally insane.",
    "rating": 4.1,
    "scores_count": 1002557,
    "director": "Martin Scorsese",
    "starring": [
      "Leonardo DiCaprio",
      "Emily Mortimer",
      "Mark Ruffalo"
    ],
    "run_time": 138,
    "genre": "Thriller",
    "released": 2010,
    "id": 4,
    "is_favorite": false,
    "video_link": "http://media.xiph.org/mango/tears_of_steel_1080p.webm",
    "preview_video_link": "https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm"
  },
  {
    "name": "Dardjeeling Limited",
    "poster_image": "https://7.react.pages.academy/static/film/poster/Dardjeeling_Limited.jpg",
    "preview_image": "https://7.react.pages.academy/static/film/preview/dardjeeling_limited.jpg",
    "background_image": "https://7.react.pages.academy/static/film/background/Dardjeeling_Limited.jpg",
    "background_color": "#AD9F8B",
    "description": "A year after their father's funeral, three brothers travel across India by train in an attempt to bond with each other.",
    "rating": 3.6,
    "scores_count": 165106,
    "director": "Wes Anderson",
    "starring": [
      "Owen Wilson",
      "Adrien Brody",
      "Jason Schwartzman"
    ],
    "run_time": 91,
    "genre": "Adventure",
    "released": 2007,
    "id": 5,
    "is_favorite": false,
    "video_link": "http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4",
    "preview_video_link": "https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm"
  },
  {
    "name": "No Country for Old Men",
    "poster_image": "https://7.react.pages.academy/static/film/poster/No_Country_for_Old_Men.jpg",
    "preview_image": "https://7.react.pages.academy/static/film/preview/no-country-for-old-men.jpg",
    "background_image": "https://7.react.pages.academy/static/film/background/No_Country_for_Old_Men.jpg",
    "background_color": "#BDAD8F",
    "description": "Violence and mayhem ensue after a hunter stumbles upon a drug deal gone wrong and more than two million dollars in cash near the Rio Grande.",
    "rating": 4.1,
    "scores_count": 764976,
    "director": "Ethan Coen",
    "starring": [
      "Tommy Lee Jones",
      "Javier Bardem",
      "Josh Brolin"
    ],
    "run_time": 122,
    "genre": "Crime",
    "released": 2007,
    "id": 6,
    "is_favorite": false,
    "video_link": "http://media.xiph.org/mango/tears_of_steel_1080p.webm",
    "preview_video_link": "https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4"
  },
  {
    "name": "Matrix",
    "poster_image": "https://7.react.pages.academy/static/film/poster/matrix.jpg",
    "preview_image": "https://7.react.pages.academy/static/film/preview/matrix.jpg",
    "background_image": "https://7.react.pages.academy/static/film/background/matrix.jpg",
    "background_color": "#B9B27E",
    "description": "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    "rating": 4.4,
    "scores_count": 1503092,
    "director": "Wachowski Brothers",
    "starring": [
      "Keanu Reeves",
      "Laurence Fishburne",
      "Carrie-Anne Moss"
    ],
    "run_time": 136,
    "genre": "Action",
    "released": 1999,
    "id": 7,
    "is_favorite": false,
    "video_link": "http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4",
    "preview_video_link": "https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm"
  },
  {
    "name": "Moonrise Kingdom",
    "poster_image": "https://7.react.pages.academy/static/film/poster/Moonrise_Kingdom.jpg",
    "preview_image": "https://7.react.pages.academy/static/film/preview/moonrise-kingdom.jpg",
    "background_image": "https://7.react.pages.academy/static/film/background/Moonrise_Kingdom.jpg",
    "background_color": "#D8E3E5",
    "description": "A pair of young lovers flee their New England town, which causes a local search party to fan out to find them.",
    "rating": 7.9,
    "scores_count": 291183,
    "director": "Wes Anderson",
    "starring": [
      "Jared Gilman",
      "Kara Hayward",
      "Bruce Willis"
    ],
    "run_time": 94,
    "genre": "Adventure",
    "released": 2012,
    "id": 8,
    "is_favorite": false,
    "video_link": "http://media.xiph.org/mango/tears_of_steel_1080p.webm",
    "preview_video_link": "https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm"
  },
];

export const getFilms = () => films.map((film) => adaptFilmToClient(film));
export const getFilm = (id) => adaptFilmToClient(films.find((film) => film.id === Number(id)));
export const getPromoFilm = () => adaptFilmToClient(films.find((film) => film.id === PROMO_FILM));
export const getSimilarFilms = (id) => getFilms().slice(0, SIMILAR_FILMS_COUNT);
export const getMyList = () => getFilms().slice(0, MY_LIST_COUNT);

