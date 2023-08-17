import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import CreateAccount from '../CreateAccount/CreateAccount';
import SingIn from '../SingIn/SingIn';
import EditLogin from '../EditLogin/EditLogin';
import ItemListHOC from '../ItemListHOC/ItemListHOC';
import OpenItem from '../OpenItem/OpenItem';
import CreateItem from '../CreateItem/CreateItem';
import EditItem from '../EditItem/EditItem';
import AppHeaderHOC from '../AppHeaderHOC/AppHeaderHOC';
import useAuth from '../../store/hook';
import Loader from '../Loader/loader';
import PrivateRoute from '../../privateRoute';

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
          <Route element={<PrivateRoute />}>
            <Route path="/profile" element={<EditLogin />} />
          </Route>
          <Route path="/" element={<ItemListHOC />} />
          <Route path="/articles/:slug" element={<OpenItem />} />
          <Route element={<PrivateRoute />}>
            <Route path="/new-article" element={<CreateItem />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path="/articles/:slug/edit" element={<EditItem />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
