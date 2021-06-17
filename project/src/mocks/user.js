import {adaptUserToClient} from '../adapters';

const user = {
  "id": 1,
  "email": "Oliver.conner@gmail.com",
  "name": "Oliver.conner",
  "avatar_url": "img/1.png",
  "token": "T2xpdmVyLmNvbm5lckBnbWFpbC5jb20="
};

export const getAuthInfo = () => adaptUserToClient(user);
