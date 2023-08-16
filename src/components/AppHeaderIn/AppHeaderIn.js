import { Link } from 'react-router-dom';

import classes from '../styles/AppHeader.module.scss';
const AppHeaderIn = () => {
  return (
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
};

export default AppHeaderIn;
