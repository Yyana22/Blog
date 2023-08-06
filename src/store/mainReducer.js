import { combineReducers } from 'redux';

import { reducerItemList } from './ItemList/ItemListReducer';
import { reducerOpenItem } from './OpenItem/OpenItemReducer';
// import { reducerSingInAccount } from './SingIn/SingInReducer';
import { reducerSelectedUser } from './User/UserReducer';
import { reducerEditAccount } from './EditAccount/EditAccountReducer';
// import { reducerCreateAccount } from './CreateAccount/CreateAccountReducer';
export const mainReducer = combineReducers({
  itemList: reducerItemList,
  openItem: reducerOpenItem,
  //   singIn: reducerSingInAccount,
  editLog: reducerEditAccount,
  //   singUp: reducerCreateAccount,
  selectedUser: reducerSelectedUser,
});
