import { Link } from 'react-router-dom';

import nullAva from '../../img/ocean-svgrepo-com.svg';
import classes from '../styles/AppHeader.module.scss';
const AppHeaderOut = (props) => {
  let ava = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).image : null;
  return (
    <div className={classes['wrap-log-out']}>
      <button className={`${classes['create-article']} ${classes['sing-up']}`}>
        <Link className={classes['profile-in']} to="/new-article">
          Create article
        </Link>
      </button>
      <div className={classes['profile-info']}>
        <div className={classes.nickname} style={{ alignItems: 'center' }}>
          <Link className={`${classes['profile-in']}`} to="/profile">
            {props.info ? props.info.username : null}
          </Link>
        </div>
        <Link className={classes['profile-in']} to="/profile">
          <img
            className={classes.avatar}
            src={ava ? ava : nullAva}
            alt="avatar"
            style={{ textDecoration: 'none', height: '46px', width: '46px', marginLeft: '10px', borderRadius: '100%' }}
          ></img>
        </Link>
      </div>
      <button className={classes['log-out']} onClick={props.clearStore}>
        Log Out
      </button>
    </div>
  );
};

export default AppHeaderOut;
