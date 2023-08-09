import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import AppHeader from '../AppHeader/AppHeader';
import CreateAccount from '../CreateAccount/CreateAccount';
import SingIn from '../SingIn/SingIn';
import EditLogin from '../EditLogin/EditLogin';
import ItemList from '../ItemList/ItemList';
import OpenItem from '../OpenItem/OpenItem';
import CreateItem from '../CreateItem/CreateItem';
import { fetchSingInAccount, fetchCreateAccount } from '../../store/User/UserActions';

import classes from './App.module.scss';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem('token') && localStorage.getItem('user')) {
      const registeredUser = localStorage.getItem('user');
      const user = JSON.parse(registeredUser);
      dispatch(fetchSingInAccount(user));
      dispatch(fetchCreateAccount(user));
    } else {
      return;
    }
  }, []);
  return (
    <div className={classes.app}>
      <AppHeader />
      <div className={classes['app-main-content']}>
        <Routes>
          <Route path="/sing-up" element={<CreateAccount />} />
          <Route path="/sing-in" element={<SingIn />} />
          <Route path="/profile" element={<EditLogin />} />
          <Route path="/" element={<ItemList />} />
          <Route path="/articles/:slug" element={<OpenItem />} />
          <Route path="/new-article" element={<CreateItem />} />
          <Route
            path="/"
            element={<h1 style={{ textAlign: 'center', color: 'red' }}>Oops, this page doesn&apos;t exist</h1>}
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;
