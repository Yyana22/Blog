import BlogServise from '../../api-service';

const blogServise = new BlogServise();
export const fetchSingInAccount = (user) => {
  console.log(user);
  return {
    type: 'SING_IN_ACCOUNT',
    user,
  };
};

export const outAccount = () => ({
  type: 'OUT_ACCOUNT',
});

export const setLoading = () => ({
  type: 'SET_LOADING',
});
export const setErrors = (error) => ({
  type: 'SET_ERROR',
  error,
});
export const singInAccount = (user) => async (dispatch) => {
  try {
    const result = await blogServise.singInAccount(user);
    const userData = await result.json();
    if (userData) {
      dispatch(setLoading());
      dispatch(fetchSingInAccount(userData.user));
    }

    localStorage.setItem('token', userData.user.token);
    localStorage.setItem('user', JSON.stringify(userData.user));
  } catch (error) {
    dispatch(setErrors(error));
  }
};
