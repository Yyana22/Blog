import { combineReducers } from 'redux';

import { reducerItemList } from './ItemList/ItemListReducer';
import { reducerOpenItem } from './OpenItem/OpenItemReducer';
import { reducerSelectedUser } from './User/UserReducer';
import { reducerArticle } from './Article/ArticleReducer';
export const mainReducer = combineReducers({
  itemList: reducerItemList,
  openItem: reducerOpenItem,
  selectedUser: reducerSelectedUser,
  article: reducerArticle,
});
