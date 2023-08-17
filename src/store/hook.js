import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getNewPosts } from '../store/Article/ArticleActions';

import { fetchSingInAccount, fetchCreateAccount } from './User/UserActions';
const useAuth = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const registeredUser = localStorage.getItem('user');
    const token = localStorage.getItem('token');

    if (token && registeredUser) {
      const user = JSON.parse(registeredUser);
      dispatch(fetchSingInAccount(user));
      dispatch(fetchCreateAccount(user));
    }
  }, [dispatch]);

  return false;
};

export default useAuth;

export const useCustomHook = (currentPage) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const offset = currentPage ? currentPage * 5 - 5 : 1;
    dispatch(getNewPosts(offset));
  }, [currentPage]);

  return currentPage;
};
