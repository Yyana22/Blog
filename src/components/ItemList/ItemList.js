import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Pagination } from 'antd';

import Item from '../Item/Item';
import { getNewPosts } from '../../store/ItemList/ItemListActions';

import classes from './ItemList.module.scss';
const ItemList = () => {
  const dispatch = useDispatch();
  let propsItem = useSelector((state) => state.itemList);

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
  return (
    <div>
      <ul className={classes.ul}>{items}</ul>
      <Pagination className={classes.pagination} total={50} onChange={(page) => dispatch(getNewPosts(page))} />
    </div>
  );
};

export default ItemList;
