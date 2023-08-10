import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Pagination } from 'antd';

import Item from '../Item/Item';
import { getNewPosts } from '../../store/ItemList/ItemListActions';
import Loader from '../Loader/loader';

import classes from './ItemList.module.scss';
const ItemList = () => {
  const dispatch = useDispatch();
  let propsItem = useSelector((state) => state.itemList);
  let { loading, articlesCount } = useSelector((state) => state.itemList);
  useEffect(() => {
    dispatch(getNewPosts());
  }, []);
  let items = propsItem.posts.map((item) => {
    return (
      <li key={Math.random() * 10000} className={classes['item-closer']}>
        <Item props={item}></Item>
      </li>
    );
  });
  const changePagination = (page) => {
    dispatch(getNewPosts(page));
  };
  if (!loading) {
    return (
      <div>
        <ul className={classes.ul}>{items}</ul>
        <Pagination
          defaultCurrent={propsItem.page}
          className={classes.pagination}
          total={articlesCount}
          //  onChange={(page) => dispatch(getNewPosts(page))}
          onChange={changePagination}
        />
      </div>
    );
  }
  return (
    <div>
      <Loader />
    </div>
  );
};

export default ItemList;
