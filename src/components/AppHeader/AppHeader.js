import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { outAccount } from '../../store/User/UserActions';
import nullAva from '../../img/ocean-svgrepo-com.svg';

import classes from './AppHeader.module.scss';
const AppHeader = () => {
  const dispatch = useDispatch();
  let selectedUserInfo = useSelector((state) => state.selectedUser);
  const clearStore = () => {
    localStorage.clear();
    dispatch(outAccount());
  };
  let ava = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).image : null;
  const log = selectedUserInfo.token ? (
    <div className={classes['wrap-log-out']}>
      <button className={`${classes['create-article']} ${classes['sing-up']}`}>
        <Link className={classes['profile-in']} to="/new-article">
          Create article
        </Link>
      </button>
      <div className={classes['profile-info']}>
        <div className={classes.nickname} style={{ alignItems: 'center' }}>
          <Link className={`${classes['profile-in']}`} to="/profile">
            {selectedUserInfo ? selectedUserInfo.username : null}
          </Link>
        </div>
        <Link className={classes['profile-in']} to="/profile">
          <img
            className={classes.avatar}
            src={ava ? ava : nullAva}
            alt="avatar"
            style={{ textDecoration: 'none', height: '46px', width: '46px', marginLeft: '10px' }}
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
