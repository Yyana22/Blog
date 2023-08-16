// import { useSelector, useDispatch } from 'react-redux';
// import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

// import { getNewPosts } from '../../store/Article/ArticleActions'
import Loader from '../Loader/loader';
import ItemList from '../ItemList/ItemList';
import { useCustomHook } from '../../store/hook';
const ItemListHOC = () => {
  let propsItem = useSelector((state) => state.article);
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = searchParams.get('page') || 1;

  //   const dispatch = useDispatch();
  //   useEffect(() => {
  //     setSearchParams({ page: currentPage.toString() || '1' });
  //     const offset = currentPage ? currentPage * 5 - 5 : 1;
  //     dispatch(getNewPosts(offset));
  //   }, [currentPage]);
  //   console.log(useCustomHook(currentPage));
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
