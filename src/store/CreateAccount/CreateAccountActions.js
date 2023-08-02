import BlogServise from '../../api-service';

const blogServise = new BlogServise();
export const fetchCreateAccount = (email, username, image, token, bio) => {
  return {
    type: 'CREATE_ACCOUNT',
    email,
    username,
    image,
    token,
    bio,
  };
};

export const setLoading = () => ({
  type: 'SET_LOADING',
});
export const setError = (error) => ({
  type: 'SET_ERROR',
  error,
});
export const setCreateAccount = (user) => async (dispatch) => {
  try {
    const result = await blogServise.createAccount(user);
    const { email, token, username, bio, image } = result;
    console.log(token);
    if (token) {
      dispatch(setLoading());
      dispatch(fetchCreateAccount(email, username, image, token, bio));
    }

    //  if (!token) {
    //    dispatch(setCreateAccount(user));
    //  }
  } catch (error) {
    if (error instanceof TypeError) {
      dispatch(setCreateAccount(user));
    } else {
      dispatch(setError(error));
    }
  }
};
