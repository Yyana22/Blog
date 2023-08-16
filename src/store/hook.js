import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

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
  }, []);

  return null;
};

export default useAuth;
