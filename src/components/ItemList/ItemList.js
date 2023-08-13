import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Pagination } from 'antd';
import { useSearchParams } from 'react-router-dom';

import Item from '../Item/Item';
import { getNewPosts } from '../../store/ItemList/ItemListActions';
import Loader from '../Loader/loader';

import classes from './ItemList.module.scss';
const ItemList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = searchParams.get('page') || 1;

  const dispatch = useDispatch();
  let propsItem = useSelector((state) => state.itemList);
  let { loading, total } = useSelector((state) => state.itemList);
  useEffect(() => {
    setSearchParams({ page: currentPage.toString() || '1' });
    const offset = currentPage ? currentPage * 5 - 5 : 1;
    dispatch(getNewPosts(offset));
  }, [currentPage]);

  const onPaginationChange = (page) => {
    setSearchParams({ page: page });
  };
  let items = propsItem.posts.map((item) => {
    return (
      <li key={Math.random() * 10000} className={classes['item-closer']}>
        <Item props={item}></Item>
      </li>
    );
  });
  if (!loading) {
    return (
      <div>
        <ul className={classes.ul}>{items}</ul>
        <Pagination
          showSizeChanger={false}
          pageSize={5}
          defaultCurrent={currentPage}
          className={classes.pagination}
          total={total}
          onChange={onPaginationChange}
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
