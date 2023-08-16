import { Pagination } from 'antd';

import Item from '../Item/Item';

import classes from './ItemList.module.scss';
const ItemList = (props) => {
  let items = props.propsItem.articles.map((item) => {
    return (
      <li key={item.slug} className={classes['item-closer']}>
        <Item props={item}></Item>
      </li>
    );
  });
  return (
    <div>
      <ul className={classes.ul}>{items}</ul>
      <Pagination
        showSizeChanger={false}
        pageSize={5}
        defaultCurrent={props.currentPage}
        className={classes.pagination}
        total={props.propsItem.total}
        onChange={props.changeList}
      />
    </div>
  );
};

export default ItemList;
