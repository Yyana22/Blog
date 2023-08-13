import { combineReducers } from 'redux';

import { reducerItemList } from './ItemList/ItemListReducer';
import { reducerArticle } from './Article/ArticleReducer';
import { reducerSelectedUser } from './User/UserReducer';
export const mainReducer = combineReducers({
  itemList: reducerItemList,
  article: reducerArticle,
  selectedUser: reducerSelectedUser,
});
