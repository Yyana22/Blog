import { combineReducers } from 'redux';

import { reducerItemList } from './ItemList/ItemListReducer';
import { reducerArticle } from './Article/ArticleReducer';
import { reducerSelectedUser } from './User/UserReducer';
import { reducerLikes } from './Likes/LikesReducer';
export const mainReducer = combineReducers({
  itemList: reducerItemList,
  article: reducerArticle,
  selectedUser: reducerSelectedUser,
  likes: reducerLikes,
});
