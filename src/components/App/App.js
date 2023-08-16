import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import CreateAccount from '../CreateAccount/CreateAccount';
import SingIn from '../SingIn/SingIn';
import EditLogin from '../EditLogin/EditLogin';
import ItemListHOC from '../ItemListHOC/ItemListHOC';
// import ItemList from '../ItemList/ItemList';
import OpenItem from '../OpenItem/OpenItem';
import CreateItem from '../CreateItem/CreateItem';
import EditItem from '../EditItem/EditItem';
import AppHeaderHOC from '../AppHeaderHOC/AppHeaderHOC';
import useAuth from '../../store/hook';
import Loader from '../Loader/loader';

import classes from './App.module.scss';

const App = () => {
  let loadValue = useSelector((state) => state.selectedUser.loading);
  useAuth();
  if (loadValue) {
    return (
      <div>
        <Loader />
      </div>
    );
  }
  return (
    <div className={classes.app}>
      <AppHeaderHOC />
      <div className={classes['app-main-content']}>
        <Routes>
          <Route path="/sing-up" element={<CreateAccount />} />
          <Route path="/sing-in" element={<SingIn />} />
          <Route path="/profile" element={<EditLogin />} />
          <Route path="/" element={<ItemListHOC />} />
          <Route path="/articles/:slug" element={<OpenItem />} />
          <Route path="/new-article" element={<CreateItem />} />
          <Route path="/articles/:slug/edit" element={<EditItem />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
