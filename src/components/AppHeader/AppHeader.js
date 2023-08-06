import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import { useEffect } from 'react';

import { outAccount } from '../../store/User/UserActions';

import classes from './AppHeader.module.scss';
const AppHeader = () => {
  const dispatch = useDispatch();
  let selectedUserInfo = useSelector((state) => state.selectedUser);
  const clearStore = () => {
    localStorage.clear();
    dispatch(outAccount());
  };
  const log = selectedUserInfo.token ? (
    <div className={classes['wrap-log-out']}>
      <button className={classes['create-article']}>Create article</button>
      <div className={classes['profile-info']}>
        <div className={classes.nickname}>
          <Link className={`${classes['profile-in']}`} to="/profile">
            {selectedUserInfo ? selectedUserInfo.username : null}
          </Link>
        </div>
        <Link className={classes['profile-in']} to="/profile">
          <img
            className={classes.avatar}
            src={selectedUserInfo ? selectedUserInfo.image : null}
            alt="avatar"
            style={{ textDecoration: 'none' }}
          ></img>
        </Link>
      </div>
      <button className={classes['log-out']} onClick={clearStore}>
        Log Out
      </button>
    </div>
  ) : (
    <div className={classes['wrap-log-in']}>
      <button className={classes['sing-in']}>
        <Link className={classes['link-btn']} to="/sing-in">
          Sing In
        </Link>
      </button>
      <button className={classes['sing-up']}>
        <Link className={classes['link-btn']} to="/sing-up">
          Sing Up
        </Link>
      </button>
    </div>
  );
  return (
    <div className={classes['app-header']}>
      <div className={classes['item-left']}>
        <Link to="/">Realworld Blog</Link>
      </div>
      <div className={classes['item-right']}>{log}</div>
    </div>
  );
};

export default AppHeader;
