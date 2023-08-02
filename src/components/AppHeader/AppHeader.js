import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { outAccount } from '../../store/SingIn/SingInActions';

import classes from './AppHeader.module.scss';
const AppHeader = () => {
  const dispatch = useDispatch();
  let login = useSelector((state) => state.singIn.token);
  console.log(login);
  const clearStore = () => {
    localStorage.clear();
    dispatch(outAccount());
  };
  let log = login ? (
    <div className={classes['wrap-log-out']}>
      <button className={classes['create-article']}>Create article</button>
      <div className={classes['profile-info']}>
        <div className={classes.nickname}>John Doe</div>
        <img className={classes.avatar} src="#" alt="avatar"></img>
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
        <Link className={classes['link-btn']} to="/create-account">
          Sing Up
        </Link>
      </button>
    </div>
  );
  return (
    <div className={classes['app-header']}>
      <div className={classes['item-left']}>
        <p>Realworld Blog</p>
      </div>
      <div className={classes['item-right']}>{log}</div>
    </div>
  );
};

export default AppHeader;
