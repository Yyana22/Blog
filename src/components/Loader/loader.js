import { Spin } from 'antd';

import classes from './loader.module.scss';
const Loader = () => {
  return (
    <div className={classes.loader}>
      <Spin size="large" />
      <p>Loading...</p>
    </div>
  );
};

export default Loader;
