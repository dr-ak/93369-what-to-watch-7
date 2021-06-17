import {adaptCommentToClient} from '../adapters';

const comments = [
  {
    "id": 1,
    "user": {
        "id": 18,
        "name": "Sophie"
    },
    "rating": 3.8,
    "comment": "The editing is a mess, and the transitions of the plot or characters are rather strange. There is no narrative focus and the storytelling is unbalanced. I cannot really understand why such a bad movie received an overwhelming approval from the critics. ",
    "date": "2021-05-23T09:55:44.867Z"
  },
  {
    "id": 2,
    "user": {
        "id": 11,
        "name": "Jack"
    },
    "rating": 7.9,
    "comment": "Poised to be an instant classic, almost everything about this film is phenomenal - the acting, the cinematography, the discography, etc.",
    "date": "2021-06-06T09:55:44.868Z"
  },
  {
    "id": 3,
    "user": {
        "id": 16,
        "name": "Mollie"
    },
    "rating": 2.1,
    "comment": "Poised to be an instant classic, almost everything about this film is phenomenal - the acting, the cinematography, the discography, etc.",
    "date": "2021-05-18T09:55:44.868Z"
  },
  {
    "id": 4,
    "user": {
        "id": 14,
        "name": "Corey"
    },
    "rating": 3.4,
    "comment": "I love this movie. This film is a milestone in cinematography. Great Immersive camera-work. This film is an experience and i has already seen it 4 times and I only see more quality of the film.",
    "date": "2021-06-05T09:55:44.868Z"
  },
  {
    "id": 5,
    "user": {
        "id": 13,
        "name": "Zak"
    },
    "rating": 3.1,
    "comment": "This movie is just plain bad. There must be some big payola going round this awards season. Badly written, average acting at best, all the characters are unrelatable and inlikeable. 2 hours of my life wasted.",
      "date": "2021-06-07T09:55:44.868Z"
  },
  {
    "id": 6,
    "user": {
        "id": 15,
        "name": "Kendall"
    },
    "rating": 4.1,
    "comment": "I love this movie. This film is a milestone in cinematography. Great Immersive camera-work. This film is an experience and i has already seen it 4 times and I only see more quality of the film.",
    "date": "2021-05-17T09:55:44.868Z"
  },
  {
    "id": 7,
    "user": {
        "id": 15,
        "name": "Kendall"
    },
    "rating": 9.9,
    "comment": "This movie really touched my heart, it really is the best movie of the year and everyone should see this masterpiece.",
    "date": "2021-05-22T09:55:44.868Z"
  },
  {
    "id": 8,
    "user": {
        "id": 15,
        "name": "Kendall"
    },
    "rating": 4.3,
    "comment": "This movie really touched my heart, it really is the best movie of the year and everyone should see this masterpiece.",
    "date": "2021-05-16T09:55:44.868Z"
  },
  {
    "id": 9,
    "user": {
        "id": 18,
        "name": "Sophie"
    },
    "rating": 1.7,
    "comment": "This movie is perfect in all its categories: credits, sound track, production, casting, writing, photography, editing, acting, and direction.\nI was amazed with the freedom of the use of the camera. This movie will change the way movies are made. Slow-mo, stills, black and white, and color were all used to brilliant effect.",
    "date": "2021-05-26T09:55:44.868Z"
  },
  {
    "id": 10,
    "user": {
        "id": 16,
        "name": "Mollie"
    },
    "rating": 2.3,
    "comment": "Poised to be an instant classic, almost everything about this film is phenomenal - the acting, the cinematography, the discography, etc.",
    "date": "2021-05-27T09:55:44.868Z"
  },
  {
    "id": 11,
    "user": {
        "id": 14,
        "name": "Corey"
    },
    "rating": 8.7,
    "comment": "Unfortunately we don't have a reliable way to tell the true ratings of a movie.",
    "date": "2021-05-28T09:55:44.868Z"
  },
  {
    "id": 12,
    "user": {
        "id": 12,
        "name": "Isaac"
    },
    "rating": 6.5,
    "comment": "A movie that will take you to another world full of emotions.",
    "date": "2021-05-14T09:55:44.868Z"
  },
  {
    "id": 13,
    "user": {
        "id": 11,
        "name": "Jack"
    },
    "rating": 3.3,
    "comment": "I really find it difficult to believe this movie is rated highly by people. It's hands down the worst movie I've seen in my life",
    "date": "2021-06-04T09:55:44.868Z"
  },
  {
    "id": 14,
    "user": {
        "id": 14,
        "name": "Corey"
    },
    "rating": 7.7,
    "comment": "A movie that will take you to another world full of emotions.",
    "date": "2021-06-02T09:55:44.868Z"
  },
  {
    "id": 15,
    "user": {
        "id": 14,
        "name": "Corey"
    },
    "rating": 8.3,
    "comment": "The editing is a mess, and the transitions of the plot or characters are rather strange. There is no narrative focus and the storytelling is unbalanced. I cannot really understand why such a bad movie received an overwhelming approval from the critics. ",
    "date": "2021-05-15T09:55:44.868Z"
  },
];

export const getComments = (filmId) => comments.map((comment) => adaptCommentToClient(comment));

