import { combineReducers } from 'redux';

import { reducerItemList } from './ItemList/ItemListReducer';
import { reducerOpenItem } from './OpenItem/OpenItemReducer';
import { reducerSingInAccount } from './SingIn/SingInReducer';
export const mainReducer = combineReducers({
  itemList: reducerItemList,
  openItem: reducerOpenItem,
  singIn: reducerSingInAccount,
});
