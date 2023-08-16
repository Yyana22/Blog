import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { outAccount } from '../../store/User/UserActions';
import AppHeaderOut from '../AppHeaderOut/AppHeaderOut';
import AppHeaderIn from '../AppHeaderIn/AppHeaderIn';
import classes from '../styles/AppHeader.module.scss';
const AppHeaderHOC = () => {
  const dispatch = useDispatch();
  let selectedUserInfo = useSelector((state) => state.selectedUser);
  const clearStore = () => {
    localStorage.clear();
    dispatch(outAccount());
  };
  return (
    <div className={classes['app-header']}>
      <div className={classes['item-left']}>
        <Link to="/">Realworld Blog</Link>
      </div>
      <div className={classes['item-right']}>
        {selectedUserInfo.token ? <AppHeaderIn clearStore={clearStore} info={selectedUserInfo} /> : <AppHeaderOut />}
      </div>
    </div>
  );
};

export default AppHeaderHOC;
