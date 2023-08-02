import { Routes, Route } from 'react-router-dom';

import AppHeader from '../AppHeader/AppHeader';
import CreateAccount from '../CreateAccount/CreateAccount';
import SingIn from '../SingIn/SingIn';
import EditLogin from '../EditLogin/EditLogin';
import ItemList from '../ItemList/ItemList';
import OpenItem from '../OpenItem/OpenItem';

import classes from './App.module.scss';

const App = () => {
  return (
    <div className={classes.app}>
      <AppHeader />
      <div className={classes['app-main-content']}>
        <Routes>
          <Route path="/create-account" Component={CreateAccount} />
          <Route path="/sing-in" Component={SingIn} />
          <Route path="/edit-login" Component={EditLogin} />
          <Route path="/item-list" Component={ItemList} />
          <Route path="/articles/:slug" Component={OpenItem} />
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
