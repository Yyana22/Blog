import classes from './AppHeader.module.scss';
const AppHeader = () => {
  let login = false;
  let log = login ? (
    <div className={classes['wrap-log-out']}>
      <button className={classes['create-article']}>Create article</button>
      <div className={classes['profile-info']}>
        <div className={classes.nickname}>John Doe</div>
        <img className={classes.avatar} src="#" alt="avatar"></img>
      </div>
      <button className={classes['log-out']}>Log Out</button>
    </div>
  ) : (
    <div className={classes['wrap-log-in']}>
      <button className={classes['sing-in']}>Sing In</button>
      <button className={classes['sing-up']}>Sing Un</button>
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
