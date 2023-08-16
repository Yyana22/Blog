import { useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Loader from '../Loader/loader';
import ItemList from '../ItemList/ItemList';
import { useCustomHook } from '../../store/hook';
const ItemListHOC = () => {
  let propsItem = useSelector((state) => state.article);
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = searchParams.get('page') || 1;

  useCustomHook(currentPage);
  const onPaginationChange = (page) => {
    setSearchParams({ page: page });
  };
  if (!propsItem.loading) {
    return <ItemList propsItem={propsItem} changeList={onPaginationChange} currentPage={currentPage} />;
  }
  return <Loader />;
};

export default ItemListHOC;
