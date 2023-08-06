import BlogServise from '../../api-service';

const blogServise = new BlogServise();
export const fetchEditAccount = (user) => {
  console.log(user);
  return {
    type: 'EDIT_ACCOUNT',
    user,
  };
};

export const setLoading = () => ({
  type: 'SET_LOADING',
});
export const setError = (error) => ({
  type: 'SET_ERROR',
  error,
});
export const setEditAccount = (user) => async (dispatch) => {
  try {
    const result = await blogServise.editAccount(user);
    const userData = result.user;
    if (userData) {
      dispatch(setLoading());
      dispatch(fetchEditAccount(userData));
    }
    console.log(userData);
    localStorage.setItem('token', userData.user.token);
    localStorage.setItem('user', JSON.stringify(userData.user));
  } catch (error) {
    dispatch(setError(error));
  }
};
