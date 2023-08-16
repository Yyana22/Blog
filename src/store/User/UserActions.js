import BlogServise from '../../api-service';

const blogServise = new BlogServise();

export const fetchStartCreateAccount = () => {
  console.log('createS');
  return {
    type: 'START_CREATE_ACCOUNT',
  };
};
export const fetchCreateAccount = (user) => {
  return {
    type: 'CREATE_ACCOUNT',
    user,
  };
};

export const fetchStartSingInAccount = () => {
  console.log('SinginS');
  return {
    type: 'START_SING_IN_ACCOUNT',
  };
};
export const fetchSingInAccount = (user) => {
  return {
    type: 'SING_IN_ACCOUNT',
    user,
  };
};
export const fetchEditAccount = (user) => {
  return {
    type: 'EDIT_ACCOUNT',
    user,
  };
};
export const outAccount = () => ({
  type: 'OUT_ACCOUNT',
});

export const setLoading = () => ({
  type: 'SET_LOADING',
});
export const setError = (error) => ({
  type: 'SET_ERROR',
  error,
});
export const setCreateAccount = (user) => async (dispatch) => {
  dispatch(fetchStartCreateAccount());
  try {
    const result = await blogServise.createAccount(user);
    const userData = await result.json();

    if (userData.user.token) {
      dispatch(setLoading());
      dispatch(fetchCreateAccount(userData.user));
    }
    localStorage.setItem('token', userData.user.token);
    localStorage.setItem('user', JSON.stringify(userData.user));
  } catch (error) {
    dispatch(setError(error));
  }
};

export const singInAccount = (user) => async (dispatch) => {
  dispatch(fetchStartSingInAccount());
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
    dispatch(setError(error));
  }
};

export const setEditAccount = (user) => async (dispatch) => {
  try {
    const result = await blogServise.editAccount(user);
    if (result) {
      dispatch(setLoading());
      dispatch(fetchEditAccount(result.user));
    }
    localStorage.setItem('token', result.user.token);
    localStorage.setItem('user', JSON.stringify(result.user));
  } catch (error) {
    dispatch(setError(error));
  }
};
