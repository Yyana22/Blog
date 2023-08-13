import { combineReducers } from 'redux';

import { reducerArticle } from './Article/ArticleReducer';
import { reducerSelectedUser } from './User/UserReducer';
export const mainReducer = combineReducers({
  article: reducerArticle,
  selectedUser: reducerSelectedUser,
});
